import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function ButtonPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            버튼 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            다양한 variant와 크기의 버튼을 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">Variant</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">기본</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="outline">아웃라인</Button>
              <Button variant="ghost">투명</Button>
              <Button variant="destructive">위험</Button>
              <Button variant="link">링크</Button>
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">크기</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">작음</Button>
              <Button size="default">기본</Button>
              <Button size="lg">큼</Button>
              <Button size="icon">✓</Button>
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4 lg:col-span-2">
            <h3 className="font-semibold">상태</h3>
            <div className="flex flex-wrap gap-2">
              <Button>활성</Button>
              <Button disabled>비활성</Button>
              <Button variant="outline">아웃라인 활성</Button>
              <Button variant="outline" disabled>아웃라인 비활성</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ButtonPage
