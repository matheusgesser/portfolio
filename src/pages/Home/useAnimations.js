import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let homeAnim = gsap.timeline({
        scrollTrigger: {
          trigger: '#home',
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play none play none'
        },
      })
      homeAnim.from(['#home > h1','#home > h2'], {
        y: -100,
        opacity: 0,
        duration: 0.7
      })
      homeAnim.from(['#home > .socials'], {
        y: 100,
        opacity: 0,
        duration: 0.5
      })
      homeAnim.from('#react', {
        x: -200,
        opacity: 0,
        duration: 0.3
      })
      homeAnim.from('#js', {
        x: 100,
        opacity: 0,
        duration: 0.3
      })
      homeAnim.from('#sass', {
        y: 100,
        opacity: 0,
        duration: 0.3
      })
    })
    return () => ctx.revert()
  }, [])
}
