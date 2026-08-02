"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig, MOBILE_NAV_BREAKPOINT_PX } from "@/constants/site"

function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery(`(min-width: ${MOBILE_NAV_BREAKPOINT_PX}px)`)

  // 데스크톱으로 리사이즈할 때 모바일 메뉴 자동 닫힘 (모바일 UX)
  React.useEffect(() => {
    if (isDesktop && open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false)
    }
  }, [isDesktop, open])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">메뉴</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px]">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export { MobileNav }
