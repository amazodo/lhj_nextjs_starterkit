import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface DemoCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

/**
 * 데모 카드 컴포넌트 - 일관된 스타일의 데모 컨테이너
 */
function DemoCard({ title, children, className = "" }: DemoCardProps): React.ReactElement {
  return (
    <Card className={`p-6 flex flex-col gap-4 ${className}`}>
      <h3 className="font-semibold">{title}</h3>
      {children}
    </Card>
  )
}

/**
 * 버튼 컴포넌트 데모
 */
function ButtonDemo(): React.ReactElement {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">기본</Button>
      <Button variant="outline">아웃라인</Button>
      <Button variant="secondary">보조</Button>
      <Button variant="ghost">투명</Button>
      <Button variant="destructive">위험</Button>
      <Button variant="link">링크</Button>
    </div>
  )
}

/**
 * 뱃지 컴포넌트 데모
 */
function BadgeDemo(): React.ReactElement {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>기본</Badge>
      <Badge variant="secondary">보조</Badge>
      <Badge variant="destructive">위험</Badge>
      <Badge variant="outline">아웃라인</Badge>
    </div>
  )
}

/**
 * 입력 필드 컴포넌트 데모
 */
function InputDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="demo-name">이름</Label>
      <Input id="demo-name" placeholder="이름을 입력하세요" disabled />
    </div>
  )
}

/**
 * 아바타 컴포넌트 데모
 */
function AvatarDemo(): React.ReactElement {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn 아바타" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">shadcn</p>
        <p className="text-xs text-muted-foreground">@shadcn</p>
      </div>
    </div>
  )
}

/**
 * 구분선 컴포넌트 데모
 */
function SeparatorDemo(): React.ReactElement {
  return (
    <div>
      <p className="text-sm">구분선 위</p>
      <Separator className="my-4" />
      <p className="text-sm">구분선 아래</p>
    </div>
  )
}

/**
 * 준비된 컴포넌트 쇼케이스 섹션 - 주요 shadcn/ui 컴포넌트 시연
 */
export const ComponentsShowcaseSection: React.FC = () => {
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
          <DemoCard title="버튼">
            <ButtonDemo />
          </DemoCard>

          <DemoCard title="뱃지">
            <BadgeDemo />
          </DemoCard>

          <DemoCard title="입력 필드">
            <InputDemo />
          </DemoCard>

          <DemoCard title="아바타">
            <AvatarDemo />
          </DemoCard>

          <DemoCard title="구분선" className="lg:col-span-2">
            <SeparatorDemo />
          </DemoCard>
        </div>
      </div>
    </section>
  )
}
