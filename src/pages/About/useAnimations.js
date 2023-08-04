import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let aboutAnim = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          end: 'bottom top',
        },
      })
      aboutAnim.from('.profile', {
        y: -200,
        opacity: 0,
        duration: 0.4
      })
      aboutAnim.from('.skills', {
        y: -200,
        opacity: 0,
        duration: 0.5
      })
      aboutAnim.from('section.content button', {
        y: -200,
        opacity: 0,
        duration: 0.6
      })
    })
    return () => ctx.revert()
  }, [])
}
