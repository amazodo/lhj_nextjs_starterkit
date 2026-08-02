import { Card } from "@/components/ui/card"

function CardPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            카드 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            콘텐츠를 담는 카드 컴포넌트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg">기본 카드</h3>
            <p className="text-sm text-muted-foreground mt-2">
              이것은 기본 카드입니다.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg">데이터 카드</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>항목:</span>
                <span className="font-medium">값</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>상태:</span>
                <span className="font-medium text-green-600">활성</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">여러 줄 콘텐츠</h3>
            <p className="text-sm text-muted-foreground mb-4">
              카드는 텍스트, 이미지, 버튼 등 다양한 콘텐츠를 담을 수 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded">항목 1</div>
              <div className="p-3 bg-muted rounded">항목 2</div>
              <div className="p-3 bg-muted rounded">항목 3</div>
              <div className="p-3 bg-muted rounded">항목 4</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CardPage
