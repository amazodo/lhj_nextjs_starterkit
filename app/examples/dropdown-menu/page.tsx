"use client"

import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

function DropdownMenuPage() {
  const [selected, setSelected] = useState("옵션 1")

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            드롭다운 메뉴 컴포넌트
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            클릭하여 메뉴를 표시하는 드롭다운 컴포넌트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">기본 메뉴</h3>
            <DropdownMenu>
              <DropdownMenuTrigger>메뉴</DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>옵션 1</DropdownMenuItem>
                <DropdownMenuItem>옵션 2</DropdownMenuItem>
                <DropdownMenuItem>옵션 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">구분선 포함</h3>
            <DropdownMenu>
              <DropdownMenuTrigger>메뉴</DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">오른쪽 정렬</h3>
            <DropdownMenu>
              <DropdownMenuTrigger>메뉴</DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>편집</DropdownMenuItem>
                <DropdownMenuItem>삭제</DropdownMenuItem>
                <DropdownMenuItem>공유</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Card>

          <Card className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold">상태 변경</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                선택: {selected}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger>선택</DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => setSelected("옵션 1")}>
                    옵션 1
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelected("옵션 2")}>
                    옵션 2
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelected("옵션 3")}>
                    옵션 3
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DropdownMenuPage
