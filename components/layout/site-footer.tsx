import { siteConfig } from "@/constants/site"

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. 모든 권리 보유.
          </p>
          <p className="text-xs text-muted-foreground">
            Next.js 16 • React 19 • Tailwind CSS v4 • shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
