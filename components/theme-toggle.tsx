"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Monitor } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // hydration mismatch 방지를 위해 마운트 후에만 렌더링
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="inline-flex h-8 px-2.5 items-center justify-center" aria-disabled="true">
        <span className="sr-only">테마 로딩 중</span>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">테마 전환</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="size-4 mr-2" />
          라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="size-4 mr-2" />
          다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="size-4 mr-2" />
          시스템
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ThemeToggle }
