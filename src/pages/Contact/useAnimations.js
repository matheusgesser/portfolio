import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let contactAnim = gsap.timeline({
        scrollTrigger: {
          trigger: '#contact',
          start: 'top center',
          end: 'bottom top',
        },
      })
      contactAnim.from('', {
        x: -200,
        opacity: 0,
        duration: 0.3
      })
    })
    return () => ctx.revert()
  }, [])
}
