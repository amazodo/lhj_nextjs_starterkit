// Claude Code 훅 - 텔레그램 모바일 알림 스크립트
//
// 사용법: node .claude/hooks/notify-telegram.cjs <permission|complete>
//   - permission: Notification 훅(권한 요청)에서 호출. stdin의 title/message 사용
//   - complete  : Stop 훅(응답 완료)에서 호출. stdin의 last_assistant_message 사용
//
// .env 파일에서 TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID를 읽어 텔레그램 sendMessage API를 호출한다.
// 이 스크립트는 Claude Code 세션 동작에 절대 영향을 주면 안 되므로,
// 어떤 에러가 발생하든 항상 exit code 0으로 종료한다(콘솔에는 에러만 남긴다).

'use strict';

const fs = require('fs');
const path = require('path');

// 프로젝트 루트의 .env 파일을 간단히 파싱한다 (dotenv 패키지 미사용)
function readEnvFile(envPath) {
  const result = {};
  if (!fs.existsSync(envPath)) return result;

  const content = fs.readFileSync(envPath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;

    const key = line.slice(0, eqIdx).trim();
    let value = line.slice(eqIdx + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    result[key] = value;
  }
  return result;
}

// 텔레그램 HTML parse_mode에서 필수로 이스케이프해야 하는 문자 처리
function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function truncate(str, max) {
  const s = String(str == null ? '' : str);
  return s.length > max ? s.slice(0, max) + '…' : s;
}

// stdin으로 들어오는 훅 이벤트 JSON을 읽는다
function readStdin() {
  return new Promise((resolve) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      data += chunk;
    });
    process.stdin.on('end', () => resolve(data));
    process.stdin.on('error', () => resolve(data));
    setTimeout(() => resolve(data), 3000);
  });
}

async function main() {
  const hookKind = process.argv[2] || 'unknown'; // 'permission' | 'complete'

  const rawInput = await readStdin();
  let payload = {};
  try {
    payload = rawInput ? JSON.parse(rawInput) : {};
  } catch (err) {
    payload = {};
  }

  // 스크립트 위치(.claude/hooks/) 기준으로 프로젝트 루트의 .env를 찾는다
  const envPath = path.join(__dirname, '..', '..', '.env');
  const env = readEnvFile(envPath);

  const botToken = env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    process.stderr.write(
      '[notify-telegram] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID가 설정되지 않아 ' +
        '텔레그램 알림을 건너뜁니다. 프로젝트 루트에 .env 파일을 만들고 값을 채워주세요.\n'
    );
    return;
  }

  const projectName = path.basename(payload.cwd || process.cwd());

  let text;
  if (hookKind === 'permission') {
    const title = escapeHtml(payload.title || 'Claude Code');
    const message = escapeHtml(payload.message || '권한 확인이 필요합니다.');
    text =
      `🔐 <b>권한 요청</b> — ${escapeHtml(projectName)}\n\n` +
      `<b>${title}</b>\n${message}`;
  } else if (hookKind === 'complete') {
    const lastMessage = truncate(payload.last_assistant_message, 300);
    text =
      `✅ <b>작업 완료</b> — ${escapeHtml(projectName)}\n\n` +
      (lastMessage ? escapeHtml(lastMessage) : '(응답 내용 없음)');
  } else {
    text = `ℹ️ <b>Claude Code 알림</b> — ${escapeHtml(projectName)}`;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    process.stderr.write(
      `[notify-telegram] 텔레그램 전송 실패 (HTTP ${res.status}): ${body}\n`
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.stderr.write(
      `[notify-telegram] 예외 발생: ${err && err.stack ? err.stack : err}\n`
    );
    process.exit(0);
  });
