# Claude Next.js Starter Kit

모던 웹 개발을 위한 **Next.js 완전 스타터킷**입니다. 빠른 프로토타이핑과 프로덕션급 프로젝트 시작에 최적화되었습니다.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwind-css)

---

## 📦 기술 스택

| 항목 | 기술 |
|------|------|
| **프레임워크** | Next.js 16 (App Router) |
| **UI 라이브러리** | React 19 |
| **타입** | TypeScript (Strict Mode) |
| **스타일링** | Tailwind CSS v4 |
| **UI 컴포넌트** | shadcn/ui (Base UI 기반) |
| **아이콘** | Lucide React |
| **테마** | next-themes (다크모드 지원) |
| **폼** | React Hook Form + Zod (확장 가능) |
| **린트** | ESLint 9 |

---

## ✨ 주요 기능

### 🎨 **완성된 UI 컴포넌트**
- Button, Card, Input, Label, Badge, Avatar, Separator, Sheet, Dropdown Menu
- 모두 접근성(a11y) 최적화된 Base UI 기반 컴포넌트

### 🌓 **다크모드 지원**
- localStorage 기반 테마 저장
- 시스템 설정 자동 감지
- 부드러운 전환 효과

### 📱 **반응형 레이아웃**
- 모바일/태블릿/데스크톱 대응
- 모바일 메뉴(Sheet) 포함

### 🚀 **프로덕션 준비**
- TypeScript strict mode
- 엄격한 ESLint 규칙
- 빠른 빌드 (Turbopack)
- 자동 다크모드 플래시 방지 스크립트

### 📚 **8가지 컴포넌트 데모 페이지**
- `/examples` 경로에서 모든 shadcn/ui 컴포넌트 라이브 데모 확인 가능
- 각 컴포넌트의 variant 및 사용 예제 포함

---

## 🚀 빠른 시작

### 1. 저장소 클론
```bash
git clone https://github.com/amazodo/lhj_nextjs_starterkit.git
cd lhj_nextjs_starterkit
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 시작
```bash
npm run dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 4. 컴포넌트 데모 확인
- `/examples` 페이지 방문
- 또는 헤더 메뉴에서 "예제" 클릭

---

## 📁 프로젝트 구조

```
src/
├── app/                      # Next.js App Router (라우팅)
│   ├── layout.tsx           # 루트 레이아웃 + 테마 제공자
│   ├── page.tsx             # 홈 페이지
│   └── examples/            # 컴포넌트 데모 페이지
│       ├── page.tsx         # 예제 목록
│       ├── button/          # 버튼 데모
│       ├── badge/           # 뱃지 데모
│       └── ...              # 기타 컴포넌트 데모
│
├── components/
│   ├── ui/                  # shadcn/ui 컴포넌트 (직접 커스터마이즈 가능)
│   ├── layout/              # 레이아웃 전용 컴포넌트
│   │   ├── site-header.tsx
│   │   ├── mobile-nav.tsx
│   │   └── theme-toggle.tsx
│   └── home/                # 홈페이지 섹션 컴포넌트
│
├── constants/               # 설정 및 상수
│   └── site.ts             # 사이트 메타정보, 네비게이션
│
├── types/                   # TypeScript 타입 정의
│   └── index.ts
│
└── globals.css              # 전역 스타일 (Tailwind)
```

---

## 🛠️ 자주 사용되는 명령어

```bash
npm run dev          # 개발 서버 (기본 포트: 3000)
npm run build        # 프로덕션 빌드
npm start            # 프로덕션 서버 실행
npm run lint         # ESLint 코드 검사
```

---

## 🎯 용도

이 스타터킷은 다음 프로젝트에 최적화되었습니다:

✅ **빠른 웹 애플리케이션 프로토타이핑**
- 초기 설정 최소화
- 즉시 사용 가능한 UI 컴포넌트

✅ **프로덕션급 프로젝트 시작**
- TypeScript strict mode
- 접근성 높은 컴포넌트
- 다크모드 지원

✅ **학습 및 레퍼런스**
- Next.js 16 최신 패턴
- shadcn/ui 커스터마이즈 예시
- 리액트 최신 버전 (React 19)

✅ **팀 프로젝트 기반**
- 일관된 코드 스타일
- TypeScript 타입 안정성
- ESLint 규칙 통일

---

## ⚠️ 중요 사항

### Next.js 16 Breaking Changes
이 프로젝트는 **Next.js 16**을 사용하며, 이전 버전과 다른 API를 가집니다.  
새 코드 작성 전에 [Next.js 공식 문서](https://nextjs.org/docs)를 참고하세요.

### shadcn/ui 커스터마이즈
`components/ui/` 파일을 직접 수정하면 됩니다. shadcn CLI를 통해 재설치할 필요가 없습니다.

---

## 📚 추가 자료

- **개발 가이드**: [`CLAUDE.md`](./CLAUDE.md) - 프로젝트 아키텍처 및 개발 규칙
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Base UI**: https://mui.com/base-ui/

---

## 🚀 배포

### Vercel (권장)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t lhj-nextjs-app .
docker run -p 3000:3000 lhj-nextjs-app
```

### 일반 호스팅
```bash
npm run build
npm start
```

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

## 💡 Tips

1. **path alias 사용**: 모든 import를 `@/` prefix로 처리 (예: `@/components/ui/button`)
2. **컴포넌트 추가**: `components/ui/` 폴더에 shadcn 컴포넌트 추가 또는 커스텀 컴포넌트 작성
3. **페이지 추가**: `app/[page-name]/page.tsx` 파일 생성 (자동 라우팅)
4. **스타일**: Tailwind CSS 클래스만 사용 (CSS 파일 불필요)
5. **테마 전환**: `components/theme-toggle.tsx` 버튼으로 라이트/다크 모드 전환

---

**Happy coding! 🎉**

문제가 있으면 [Issues](https://github.com/amazodo/lhj_nextjs_starterkit/issues)에 신고해주세요.
