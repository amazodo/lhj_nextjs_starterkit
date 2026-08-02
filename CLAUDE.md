# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Next.js 16 모던 웹 스타터킷** — React 19, TypeScript, Tailwind CSS v4, shadcn/ui를 포함한 풀스택 개발 환경.

### ⚠️ 중요: Next.js 16 Breaking Changes

이 프로젝트는 **Next.js 16을 사용하며 이전 버전과 다른 API를 가집니다.** 새 코드 작성 전에 `node_modules/next/dist/docs/`의 관련 가이드를 읽으세요 (특히 라우팅, 캐싱, middleware → proxy 변경).

---

## 자주 사용되는 명령어

```bash
npm run dev         # 개발 서버 시작 (기본 포트: 3000)
npm run build       # 프로덕션 빌드
npm start           # 프로덕션 서버 시작
npm run lint        # ESLint로 린트
```

---

## 고수준 아키텍처

### 디렉토리 구조

```
app/                     # Next.js App Router (라우팅 정의)
├── page.tsx             # 홈 페이지
├── layout.tsx           # 루트 레이아웃 (next-themes 테마 제공자 포함)
└── examples/            # 예제 페이지들 (/examples, /examples/button 등)

components/
├── ui/                  # shadcn/ui 컴포넌트 (Button, Card, Input, Sheet 등)
├── layout/              # 레이아웃 전용 컴포넌트 (SiteHeader, MobileNav, ThemeToggle)
└── home/                # 홈페이지 섹션 컴포넌트 (HeroSection, ComponentsShowcaseSection 등)

constants/               # 설정 및 상수 (siteConfig, 네비게이션 링크 등)
types/                   # 공유 TypeScript 타입 정의
```

### 기술 스택

| 항목 | 버전/라이브러리 | 용도 |
|------|----------|------|
| **런타임** | Next.js 16.2.12 | App Router 기반 SSR/SSG |
| **UI 프레임워크** | React 19 | 컴포넌트 |
| **타입** | TypeScript (strict) | 타입 안정성 |
| **스타일** | Tailwind CSS v4 | 유틸리티 CSS |
| **UI 컴포넌트** | shadcn/ui (Base UI 기반) | 접근성 높은 프리미티브 |
| **아이콘** | lucide-react | SVG 아이콘 라이브러리 |
| **테마** | next-themes | 라이트/다크 모드 전환 |
| **린트** | ESLint 9 | 코드 품질 |

### Path Alias

모든 상대 import는 `@/` prefix로 처리됩니다:

```ts
// ✅ 권장
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site"

// ❌ 비권장
import { Button } from "../../../components/ui/button"
```

---

## 핵심 구현 패턴

### 1. 라우팅 (App Router)

- `app/[page-name]/page.tsx` = URL `/[page-name]`
- `app/[page-name]/layout.tsx` = 해당 경로 및 하위 공용 레이아웃
- 동적 라우트는 `[slug]` 폴더명 사용
- 레이아웃 계층 구조: 루트 레이아웃 (`app/layout.tsx`) → 페이지 레이아웃 → 페이지

### 2. Client vs Server 컴포넌트

- **Server Component (기본)**: SEO, 보안에 유리. 직접 DB 접근 가능.
- **Client Component**: 상호작용이 필요한 경우 `"use client"` 선언. (예: 폼, 드롭다운, 상태 관리)

현재 예시:
- `app/examples/sheet/page.tsx` = client (`useState` 사용)
- `app/examples/button/page.tsx` = server (상호작용 없음)

### 3. shadcn/ui 컴포넌트 사용

shadcn/ui 컴포넌트는 Base UI (@base-ui/react) 위의 래퍼입니다:

```tsx
// components/ui/button.tsx 구조
import * as React from "react"
import { cn } from "@/lib/utils"  // class 병합 유틸
// Base UI 임포트 및 스타일 적용
```

**커스터마이즈**: 컴포넌트는 `components/ui/`에 직접 존재하므로 필요시 스타일/동작을 수정하면 됩니다 (shadcn CLI 없음).

### 4. 테마 (다크모드)

**구현**:
- `app/layout.tsx`: `<ThemeProvider>` (next-themes)
- `components/theme-toggle.tsx`: 테마 전환 버튼
- `app/layout.tsx` → `<head><script>`: localStorage 값 확인 후 초기 class 적용

**우선순위**:
1. localStorage.theme (사용자 선택)
2. System preference (window.matchMedia)
3. 기본값: light

---

## 코드 스타일 가이드

다음 규칙은 `.claude/CLAUDE.md` (개인 설정)와 이 파일 (`CLAUDE.md`, 프로젝트 설정)에서 정의됩니다:

- **인덴트**: 2칸 스페이스
- **타입**: TypeScript strict mode. `any` 금지.
- **컴포넌트 이름**: PascalCase
- **변수/함수**: camelCase
- **JSDoc**: 간단한 한 줄 주석만 (WHY가 비자명할 때만)
- **함수 길이**: 30줄 이하 (초과 시 분리 제안)
- **매직 넘버**: 금지, 상수로 정의

---

## 개발 workflow

### 새 페이지 추가

1. `app/[page-name]/page.tsx` 생성
2. 필요시 `app/[page-name]/layout.tsx` 추가
3. 컴포넌트는 `components/[feature]/` 아래 구성

### 새 컴포넌트 추가

1. `components/[category]/[component-name].tsx` 생성 (예: `components/ui/alert.tsx`)
2. TypeScript 타입 정의
3. 스토리: 홈페이지 또는 예제 페이지에서 데모

### 빌드 및 배포

```bash
npm run build    # 빌드 검증
npm start        # 프로덕션 미리보기
```

빌드 완료 후 `.next/` 디렉토리가 생성되고 Vercel 또는 셀프호스팅으로 배포 가능.

---

## 주의사항

1. **Next.js 16 API**: 이전 버전과 다릅니다. 문서 참고 필수.
2. **Strict TypeScript**: `tsconfig.json`의 `"strict": true` 유지. 타입 안정성 우선.
3. **ESLint**: `npm run lint` 실행 후 수정. 커밋 전 꼭 확인.
4. **TailwindCSS v4**: 클래스명은 v4 표준에 맞춤 (v3와 다를 수 있음).
5. **shadcn/ui 커스터마이즈**: `components/ui/` 파일을 직접 수정하면 됨 (shadcn CLI 재실행 불필요).

---

## 참고 문서

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Base UI (shadcn 기반)](https://mui.com/base-ui/)
- [next-themes](https://github.com/pacocoursey/next-themes)
