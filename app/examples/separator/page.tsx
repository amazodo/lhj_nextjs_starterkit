import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"

function SeparatorPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            구분선 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            콘텐츠를 시각적으로 구분하는 구분선입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">가로 구분선</h3>
            <div>
              <p className="text-sm">구분선 위</p>
              <Separator className="my-4" />
              <p className="text-sm">구분선 아래</p>
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">다중 구분선</h3>
            <div className="space-y-4">
              <p className="text-sm">섹션 1</p>
              <Separator />
              <p className="text-sm">섹션 2</p>
              <Separator />
              <p className="text-sm">섹션 3</p>
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4 lg:col-span-2">
            <h3 className="font-semibold">세로 구분선</h3>
            <div className="flex items-center gap-4">
              <span>항목 1</span>
              <Separator orientation="vertical" className="h-6" />
              <span>항목 2</span>
              <Separator orientation="vertical" className="h-6" />
              <span>항목 3</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default SeparatorPage
