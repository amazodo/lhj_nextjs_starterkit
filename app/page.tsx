import { HeroSection } from "@/components/home/hero-section"
import { TechStackSection } from "@/components/home/tech-stack-section"
import { ComponentsShowcaseSection } from "@/components/home/components-showcase-section"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <TechStackSection />
      <ComponentsShowcaseSection />
    </div>
  )
}
