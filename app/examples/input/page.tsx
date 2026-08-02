import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

function InputPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            입력 필드 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            폼 입력을 위한 입력 필드와 레이블 컴포넌트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">기본 입력</h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" />
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">이메일 입력</h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요" />
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">비활성 입력</h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="disabled">비활성</Label>
              <Input id="disabled" placeholder="입력 불가" disabled />
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">비밀번호 입력</h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default InputPage
