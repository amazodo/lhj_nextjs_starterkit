"use client"

import { Card } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

function SheetPage() {
  const [open, setOpen] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            시트 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            사이드에서 슬라이드되는 패널 컴포넌트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">왼쪽 시트</h3>
            <Sheet>
              <SheetTrigger>열기</SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>왼쪽 패널</SheetTitle>
                  <SheetDescription>
                    왼쪽에서 슬라이드되는 시트입니다.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 text-sm">
                  패널 콘텐츠가 여기에 표시됩니다.
                </div>
              </SheetContent>
            </Sheet>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">오른쪽 시트</h3>
            <Sheet>
              <SheetTrigger>열기</SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>오른쪽 패널</SheetTitle>
                  <SheetDescription>
                    오른쪽에서 슬라이드되는 시트입니다.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 text-sm">
                  패널 콘텐츠가 여기에 표시됩니다.
                </div>
              </SheetContent>
            </Sheet>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">상단 시트</h3>
            <Sheet>
              <SheetTrigger>열기</SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>상단 패널</SheetTitle>
                  <SheetDescription>
                    상단에서 슬라이드되는 시트입니다.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">제어 상태</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                상태: {open ? "열림" : "닫힘"}
              </p>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>토글</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>상태 제어 패널</SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default SheetPage
