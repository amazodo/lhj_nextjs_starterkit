// Claude Code 훅 - TypeScript 타입체크 스크립트
//
// 사용법: node .claude/hooks/typecheck.cjs
//   - 파일 저장 시 자동으로 TypeScript 타입체크 실행
//   - tsc --noEmit으로 타입 에러만 검사 (빌드하지 않음)
//
// 타입체크 실패해도 파일 저장은 진행되며, 콘솔에 에러만 표시된다.

'use strict';

const { spawn } = require('child_process');
const path = require('path');

function runTypeCheck() {
  return new Promise((resolve) => {
    const projectRoot = path.join(__dirname, '..', '..');
    const tscPath = path.join(projectRoot, 'node_modules', '.bin', 'tsc');
    const proc = spawn(process.platform === 'win32' ? tscPath + '.cmd' : tscPath, ['--noEmit'], {
      cwd: projectRoot,
      stdio: 'pipe',
    });

    let stdout = '';
    let stderr = '';

    proc.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      if (code === 0) {
        process.stderr.write('[typecheck] ✅ TypeScript 타입체크 통과\n');
      } else {
        if (stderr) process.stderr.write(stderr);
        if (stdout) process.stderr.write(stdout);
      }
      resolve(code);
    });

    proc.on('error', (err) => {
      process.stderr.write(`[typecheck] ❌ 실행 실패: ${err.message}\n`);
      resolve(1);
    });

    // 타입체크가 너무 오래 걸리는 것을 방지 (10초)
    setTimeout(() => {
      proc.kill();
      process.stderr.write('[typecheck] ⏱️ 타입체크 타임아웃 (10초)\n');
      resolve(1);
    }, 10000);
  });
}

async function main() {
  await runTypeCheck();
  process.exit(0);
}

main().catch((err) => {
  process.stderr.write(`[typecheck] 예외: ${err.message}\n`);
  process.exit(0);
});
