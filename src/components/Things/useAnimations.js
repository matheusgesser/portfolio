import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let homeAnim = gsap.timeline({
        scrollTrigger: {
          trigger: '.pages',
        },
        delay: 2
      })
      homeAnim.from('aside.top', {
        y: -100,
        opacity: 0,
        duration: 0.5
      })
      homeAnim.from('aside.socials', {
        y: 300,
        opacity: 0,
        duration: 0.5
      })
      homeAnim.from('aside.navigation', {
        x: 100,
        opacity: 0,
        duration: 0.5
      })
    })
    return () => ctx.revert()
  }, [])
}
