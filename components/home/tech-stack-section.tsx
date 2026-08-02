import {
  Code2,
  Zap,
  Palette,
  Package,
  TypeIcon,
  Moon,
} from "lucide-react"
import { Card } from "@/components/ui/card"

const TECH_STACK_ITEMS = [
  {
    icon: Zap,
    title: "Next.js 16",
    description: "최신 App Router와 서버 컴포넌트로 빠른 성능을 보장합니다.",
  },
  {
    icon: Code2,
    title: "React 19",
    description: "최신 React의 모든 기능을 활용한 선진적인 개발 경험.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "CSS-first 디자인 토큰으로 일관된 스타일링 시스템.",
  },
  {
    icon: Package,
    title: "shadcn/ui",
    description: "Base UI 기반의 재사용 가능한 고품질 컴포넌트.",
  },
  {
    icon: TypeIcon,
    title: "TypeScript",
    description: "완전한 타입 안정성으로 신뢰할 수 있는 코드.",
  },
  {
    icon: Moon,
    title: "다크모드",
    description: "next-themes로 완벽하게 지원되는 라이트/다크 테마.",
  },
]

function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            기술 스택
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            검증되고 인기 있는 기술들의 완벽한 조합
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <Icon className="size-6 text-primary" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { TechStackSection }
