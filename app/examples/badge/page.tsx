import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

function BadgePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            뱃지 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            상태를 나타내는 뱃지 컴포넌트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">Variant</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="destructive">위험</Badge>
              <Badge variant="outline">아웃라인</Badge>
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">사용 예</h3>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-2">
                상태: <Badge>활성</Badge>
              </span>
              <span className="flex items-center gap-2">
                태그: <Badge variant="secondary">React</Badge>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BadgePage
