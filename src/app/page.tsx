import { About } from "@/components/about"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-18">
      <Hero />

      <About />

      <Journey />
    </div>
  )
}
