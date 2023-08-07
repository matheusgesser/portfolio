import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './styles.scss'

export function Cursor({ theme }) {

  let cursorSmall = useRef(null)
  let cursorLarge = useRef(null)

  function handleMouseEnter() {
    gsap.to(cursorLarge, {
      width: '100px',
      height: '100px',
      borderWidth: 0,
      backgroundColor: "#88888825",
      ease: 'power3'
    });
    gsap.to(cursorSmall, {
      opacity: 0,
      ease: 'power3'
    });
  }
  
  function handleMouseLeave() {
    gsap.to(cursorLarge, {
      width: '40px',
      height: '40px',
      borderWidth: 1,
      backgroundColor: "transparent",
      ease: 'power3'
    });
    gsap.to(cursorSmall, {
      opacity: 1,
      ease: 'power3'
    });
  }

  useEffect(() => {
    if (cursorLarge.current) {
      cursorSmall = cursorSmall.current
      cursorLarge = cursorLarge.current

      gsap.set(cursorSmall, {xPercent: -50, yPercent: -50})
      gsap.set(cursorLarge, {xPercent: -50, yPercent: -50})

      let xToSmall = gsap.quickTo(cursorSmall, "x", {duration: 0.01, ease: "none"})
      let yToSmall = gsap.quickTo(cursorSmall, "y", {duration: 0.01, ease: "none"})
      
      let xToLarge = gsap.quickTo(cursorLarge, "x", {duration: 0.8, ease: "expo"})
      let yToLarge = gsap.quickTo(cursorLarge, "y", {duration: 0.8, ease: "expo"})

      document.body.addEventListener("mousemove", (e) => {
        xToSmall(e.pageX);
        yToSmall(e.pageY);

        xToLarge(e.pageX);
        yToLarge(e.pageY);
      });
      
      const elements = document.querySelectorAll('button, a, h1, h2, p')
      elements.forEach((element) => {
        element.style.cursor = 'none'
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      document.body.addEventListener("mousedown", () => {
        gsap.to(cursorSmall, {
          duration: 0.15,
          scale: 2,
        });
        gsap.to(cursorLarge, {
          duration: 0.3,
          backgroundColor: 'transparent',
        });
      });
      document.body.addEventListener("mouseup", () => {
        gsap.to(cursorSmall, {
          duration: 0.15,
          scale: 1,
        });
      });

    }
  }, [])

  return (
    <>
      <div ref={cursorSmall} className={`cursor small ${theme}`}></div>
      <div ref={cursorLarge} className={`cursor large ${theme}`}></div>
    </>
  )
}