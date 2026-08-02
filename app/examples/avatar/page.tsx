import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

function AvatarPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            아바타 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">이미지 포함</h3>
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

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">폴백 텍스트</h3>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">@johndoe</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 flex flex-col gap-4 lg:col-span-2">
            <h3 className="font-semibold">다양한 크기</h3>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AvatarPage
