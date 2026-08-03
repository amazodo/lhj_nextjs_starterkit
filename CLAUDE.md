# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Next.js 16 모던 웹 스타터킷** — React 19, TypeScript, Tailwind CSS v4, shadcn/ui를 포함한 풀스택 개발 환경.

### ⚠️ 중요: Next.js 16 Breaking Changes

이 프로젝트는 **Next.js 16을 사용하며 이전 버전과 다른 API를 가집니다.** 새 코드 작성 전에 `node_modules/next/dist/docs/`의 관련 가이드를 읽으세요 (특히 라우팅, 캐싱, middleware → proxy 변경).

---

## 빠른 시작

```bash
npm install              # 의존성 설치
npm run dev              # 개발 서버 시작 (localhost:3000)
npm run lint             # ESLint 검사 및 수정
npm run build && npm start  # 프로덕션 빌드 및 미리보기
```

---

## 기술 스택

| 계층 | 기술 | 버전 |
|------|------|------|
| **런타임** | Next.js (App Router) | 16.2.12 |
| **언어** | TypeScript + React | 19 |
| **스타일** | Tailwind CSS v4 | 4.x |
| **컴포넌트** | shadcn/ui (Base UI 기반) | 최신 |
| **아이콘** | lucide-react | 최신 |
| **테마** | next-themes | 최신 |
| **린터** | ESLint 9 | 9.x |

## 프로젝트 구조

```
app/                      # App Router (라우팅, 페이지 레이아웃)
├── page.tsx              # 홈 페이지
├── layout.tsx            # 루트 레이아웃 (ThemeProvider, 글로벌 스타일)
└── [page]/               # 동적 경로 예제

components/
├── ui/                   # shadcn/ui 컴포넌트 (Button, Card, Sheet 등)
├── layout/               # 공유 UI 레이아웃 (Header, Nav, Theme Toggle)
└── home/                 # 홈 페이지 섹션 (Hero, Showcase 등)

constants/                # 설정값 및 상수 (siteConfig, routes 등)
types/                    # 공유 TypeScript 타입 정의
lib/                      # 유틸리티 함수 (cn, 포매터 등)
```

## Import 규칙

항상 `@/` 경로별칭을 사용합니다 (`tsconfig.json`에 정의됨):

```ts
// ✅ 필수
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site"

// ❌ 금지
import { Button } from "../../../components/ui/button"
```

---

## 핵심 개발 패턴

### 라우팅 (App Router)

| 구조 | 결과 | 설명 |
|------|------|------|
| `app/page.tsx` | `/` | 홈 페이지 |
| `app/blog/page.tsx` | `/blog` | 정적 경로 |
| `app/[slug]/page.tsx` | `/any-value` | 동적 경로 |
| `app/blog/[id]/layout.tsx` | `/blog/*` | 하위 경로 공용 레이아웃 |

**레이아웃 계층**: 루트 (`app/layout.tsx`) → 세그먼트 레이아웃 → 페이지

### Server vs Client 컴포넌트

```tsx
// ✅ Server (기본값, SEO/보안 우선)
export default function Page() {
  // DB 접근, 환경변수 사용 가능
  return <div>...</div>
}

// ⚠️ Client (상호작용 필요 시)
'use client'
export default function Interactive() {
  const [state, setState] = useState()  // useState, useEffect 등
  return <div onClick={() => setState()}>...</div>
}
```

### shadcn/ui 컴포넌트

컴포넌트는 `components/ui/` 디렉토리에 직접 존재하며 (shadcn CLI 없음), Base UI 기반입니다:

```tsx
// 사용
import { Button } from "@/components/ui/button"

// 커스터마이즈 (components/ui/button.tsx 직접 수정)
import { cn } from "@/lib/utils"  // Tailwind 클래스 병합
```

### 다크모드 구현

- **ThemeProvider**: `app/layout.tsx`에서 `next-themes` 사용
- **저장**: `localStorage.theme`에 사용자 선택 저장
- **토글**: `<ThemeToggle />` 컴포넌트 사용
- **우선순위**: 저장된 선택 → 시스템 설정 → 밝은 모드

---

## 코드 스타일

전체 스타일 규칙은 `~/.claude/CLAUDE.md`를 참고하세요. 프로젝트 핵심 규칙:

- **TypeScript**: Strict mode 필수, `any` 타입 금지
- **JSDoc**: WHY가 비자명할 때만 한 줄 (무엇을 하는지는 코드에서 명백해야 함)
- **함수**: 30줄 이하 (초과 시 분리)
- **상수**: 매직 넘버 금지, 항상 상수로 정의
- **테스트**: 린트 통과 필수 (`npm run lint`)

---

## 개발 체크리스트

### 새 페이지 추가

```bash
# 1. 페이지 파일 생성
app/[page-name]/
├── page.tsx          # 필수: 페이지 컴포넌트
└── layout.tsx        # 선택: 이 경로의 공용 레이아웃

# 2. 컴포넌트 분리 (선택)
components/[feature]/
└── SectionName.tsx   # 페이지에서 import
```

### 새 컴포넌트/UI 요소 추가

```bash
# UI: shadcn/ui 프리미티브 (접근성 중심)
components/ui/my-component.tsx

# 기능별: 특정 페이지/섹션에만 쓰는 컴포넌트
components/[feature]/FeatureName.tsx
```

**필수 확인사항**: TypeScript 타입 정의, `npm run lint` 통과

### 빌드 및 배포

```bash
npm run build              # 타입체크 + 번들링
npm start                  # 프로덕션 미리보기
# 배포: Vercel 또는 커스텀 서버
```

---

## 자주 하는 실수

| 문제 | 해결 |
|------|------|
| 상대 경로 import | 항상 `@/` 사용하기 (`../@/../..` 금지) |
| 서버 컴포넌트에서 `useState` | `'use client'` 선언 추가 |
| Tailwind 클래스 미적용 | `tailwind.config.ts`에 경로가 설정되어 있는지 확인 |
| 임포트 에러 | `npm run lint` 후 수정 + 타입체크 |
| 테마 변경 미반영 | 브라우저 캐시 삭제 또는 시크릿 모드에서 테스트 |

---

## 참고 자료

### 핵심 문서

- **[Next.js 16 App Router](https://nextjs.org/docs/app/building-your-application/upgrading)** — 라우팅 및 마이그레이션
- **[Tailwind CSS v4](https://tailwindcss.com/docs)** — 유틸리티 스타일
- **[shadcn/ui](https://ui.shadcn.com)** — 접근성 높은 UI 컴포넌트
- **[Base UI](https://mui.com/base-ui/)** — shadcn/ui의 기반 라이브러리
- **[next-themes](https://github.com/pacocoursey/next-themes)** — 다크모드 구현

### 추가 리소스

- React 19 Docs: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- ESLint: https://eslint.org/docs/latest
