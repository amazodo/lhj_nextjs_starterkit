import Link from "next/link"
import { Card } from "@/components/ui/card"

function ExamplesPage() {
  const components = [
    { label: "버튼", href: "/examples/button", description: "다양한 variant의 버튼 컴포넌트" },
    { label: "뱃지", href: "/examples/badge", description: "상태별 뱃지 컴포넌트" },
    { label: "입력 필드", href: "/examples/input", description: "레이블과 입력 필드 데모" },
    { label: "아바타", href: "/examples/avatar", description: "사용자 아바타 컴포넌트" },
    { label: "구분선", href: "/examples/separator", description: "콘텐츠 구분선" },
    { label: "카드", href: "/examples/card", description: "레이아웃용 카드 컴포넌트" },
    { label: "시트", href: "/examples/sheet", description: "사이드 패널 컴포넌트" },
    { label: "드롭다운 메뉴", href: "/examples/dropdown-menu", description: "드롭다운 메뉴 컴포넌트" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            shadcn/ui 컴포넌트 예제
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            스타터킷에 포함된 shadcn/ui 컴포넌트들의 사용 예제입니다. 각 컴포넌트를 클릭하여 상세 데모를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {components.map((comp) => (
            <Link key={comp.href} href={comp.href}>
              <Card className="p-4 h-full hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold text-lg">{comp.label}</h3>
                <p className="text-sm text-muted-foreground mt-2">{comp.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExamplesPage
