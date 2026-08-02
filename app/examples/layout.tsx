import Link from "next/link"
import { ArrowLeft } from "lucide-react"

function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/examples" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" />
          예제 목록
        </Link>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default ExamplesLayout
