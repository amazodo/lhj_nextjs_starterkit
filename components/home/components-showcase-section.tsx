import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

function ComponentsShowcaseSection() {
  return (
    <section
      id="components"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            준비된 컴포넌트
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            모든 프로젝트에 필수적인 컴포넌트들을 미리 설치했습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 버튼 데모 */}
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">버튼</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">기본</Button>
              <Button variant="outline">아웃라인</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="ghost">투명</Button>
              <Button variant="destructive">위험</Button>
              <Button variant="link">링크</Button>
            </div>
          </Card>

          {/* 뱃지 데모 */}
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">뱃지</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="destructive">위험</Badge>
              <Badge variant="outline">아웃라인</Badge>
            </div>
          </Card>

          {/* 폼 필드 데모 */}
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">입력 필드</h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" />
            </div>
          </Card>

          {/* 아바타 데모 */}
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">아바타</h3>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">shadcn</p>
                <p className="text-xs text-muted-foreground">@shadcn</p>
              </div>
            </div>
          </Card>

          {/* 구분선 데모 */}
          <Card className="p-6 flex flex-col gap-4 lg:col-span-2">
            <h3 className="font-semibold">구분선</h3>
            <div>
              <p className="text-sm">구분선 위</p>
              <Separator className="my-4" />
              <p className="text-sm">구분선 아래</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { ComponentsShowcaseSection }
