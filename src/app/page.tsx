import { About } from "@/components/about"
import { Hero } from "@/components/hero"

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-18">
      <Hero />

      <About />
    </div>
  )
}
