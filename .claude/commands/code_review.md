---
description: '컴포넌트의 소스코드를 검증하고 품질을 분석합니다'
allowed-tools:
  [
    'Bash(find:*)',
    'Glob(*)',
    'Grep(*)',
    'Read(*)',
    'ReportFindings(*)',
  ]
---

# 커스텀 커맨드: code_review

지정된 컴포넌트의 소스코드를 검증하고 코드 품질, 타입 안정성, 의존성 등을 분석합니다.

## 사용법

```
/code_review <component-name>
```

**예시:**
```
/code_review Button
/code_review Card
/code_review SiteHeader
```

## 검증 항목

### 1. 코드 구조 검증
- TypeScript 타입 안정성 (any 타입 사용 여부)
- JSDoc 주석 형식
- 함수 길이 및 복잡도
- 네이밍 컨벤션 (camelCase, PascalCase)

### 2. 의존성 분석
- import/export 문의 정확성
- 순환 의존성 검사
- 사용되지 않는 import 확인
- 외부 라이브러리 사용 적절성

### 3. 스타일 가이드 준수
- 들여쓰기 (2칸 스페이스)
- Tailwind CSS 클래스명 형식
- shadcn/ui 컴포넌트 사용 패턴
- TypeScript strict mode 준수

### 4. 성능 및 접근성
- 불필요한 렌더링 또는 리렌더링
- 메모이제이션 필요 여부
- 접근성 속성 (aria-*, role 등)
- 다크모드 지원 확인

### 5. 테스트 및 문서화
- 스토리북이나 예제 페이지 존재 여부
- 사용 방법 문서화 여부
- 테스트 파일 존재 여부

## 검사 프로세스

1. 컴포넌트 파일 위치 찾기
2. 소스코드 읽기 및 분석
3. 관련 파일들 (테스트, 스토리북) 검색
4. 코드 품질 항목별 평가
5. 개선 사항 및 주의사항 보고

## 출력 형식

- ✅ 통과: 준수하는 항목
- ⚠️ 주의: 개선 권장 항목
- 🔴 오류: 반드시 수정해야 할 항목
