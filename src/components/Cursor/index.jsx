import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './styles.scss'

export function Cursor({ theme }) {

  let cursorLarge = useRef(null)

  function handleMouseEnter() {
    gsap.fromTo(cursorLarge,
      {width: '40px', height: '40px'},
      {width: '20px', height: '20px', ease: 'power3'});
  }
  
  function handleMouseLeave() {
    gsap.fromTo(cursorLarge,
      {width: '20px', height: '20px'},
      {width: '40px', height: '40px', ease: 'power3'});
  }

  useEffect(() => {
    if (cursorLarge.current) {
      cursorLarge = cursorLarge.current

      gsap.set(cursorLarge, {xPercent: -50, yPercent: -50})
      
      let xToLarge = gsap.quickTo(cursorLarge, 'x', {duration: 0.8, ease: 'expo'})
      let yToLarge = gsap.quickTo(cursorLarge, 'y', {duration: 0.8, ease: 'expo'})
      
      document.body.addEventListener('mousemove', (e) => {
        gsap.to('.cursor', {
          duration: 2,
          opacity: 1
        })

        xToLarge(e.clientX);
        yToLarge(e.clientY);
      });
      
      const elements = document.querySelectorAll('button, a')
      elements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

    }
  }, [])

  return (
    <>
      <div ref={cursorLarge} className={`cursor large ${theme}`}></div>
    </>
  )
}