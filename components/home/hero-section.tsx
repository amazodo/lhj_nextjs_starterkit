import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

/**
 * 홈페이지 히어로 섹션
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-6">
        <Badge className="w-fit" variant="secondary">
          ✨ Next.js 16 · React 19 · Tailwind v4 · Base UI
        </Badge>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            모던 웹 개발을 위한
            <br />
            <span className="text-primary">Next.js 스타터킷</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            모든 프로젝트에 필요한 레이아웃, 다크모드, 기본 컴포넌트, 타입 정의를 미리 준비했습니다.
            빠르게 시작하고, 자유롭게 확장하세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#components" className="inline-block">
            <Button size="lg">컴포넌트 탐색</Button>
          </Link>
          <Link href="/login" className="inline-block">
            <Button size="lg" variant="outline">
              로그인
            </Button>
          </Link>
          <a
            href="https://github.com/shadcn-ui/shadcn-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="GitHub에서 프로젝트 보기 (새 탭에서 열림)"
          >
            <Button size="lg" variant="outline">
              GitHub에서 보기
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
