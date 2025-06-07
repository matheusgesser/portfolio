import { About } from "@/components/about"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"
import { Projects } from "@/components/projects"

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />

      <About />

      <Journey />

      <Projects />
    </div>
  )
}
