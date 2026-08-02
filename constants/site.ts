import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Claude Next.js Starter",
  description: "모던 웹 개발을 위한 Next.js 스타터킷. Next.js 16, React 19, Tailwind CSS v4, shadcn/ui를 기본으로 제공합니다.",
  nav: [
    {
      label: "홈",
      href: "/",
    },
    {
      label: "구성 요소",
      href: "#components",
    },
    {
      label: "기술 스택",
      href: "#tech-stack",
    },
  ],
}

export const MOBILE_NAV_BREAKPOINT_PX = 768
