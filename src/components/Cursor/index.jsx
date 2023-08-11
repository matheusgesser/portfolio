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
  }
  
  function handleMouseLeave() {
    gsap.to(cursorLarge, {
      width: '40px',
      height: '40px',
      borderWidth: 1,
      backgroundColor: "transparent",
      ease: 'power3'
    });
  }

  let mouse = {x:0, y:0}

  useEffect(() => {
    if (cursorLarge.current) {
      cursorSmall = cursorSmall.current
      cursorLarge = cursorLarge.current

      gsap.set(cursorSmall, {xPercent: -50, yPercent: -50})
      gsap.set(cursorLarge, {xPercent: -50, yPercent: -50})

      let xSetterSmall = gsap.quickSetter(cursorSmall, "x", "px")
      let ySetterSmall = gsap.quickSetter(cursorSmall, "y", "px")
      
      let xToLarge = gsap.quickTo(cursorLarge, "x", {duration: 0.8, ease: "expo"})
      let yToLarge = gsap.quickTo(cursorLarge, "y", {duration: 0.8, ease: "expo"})
      
      let ySetterLarge = gsap.quickSetter(cursorLarge, "y", "px")

      document.body.addEventListener("mousemove", (e) => {
        gsap.to('.cursor', {
          duration: 2,
          opacity: 1
        })
        xSetterSmall(e.pageX);
        ySetterSmall(e.pageY);

        xToLarge(e.pageX);
        yToLarge(e.pageY);
        mouse = {x: e.pageX, y: e.pageY}
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
          duration: 0.8,
          backgroundColor: 'transparent',
        });
      });
      document.body.addEventListener("mouseup", () => {
        gsap.to(cursorSmall, {
          duration: 0.15,
          scale: 1,
        });
      });

      let lastScrollValue = 0
      window.addEventListener("scroll", () => {
        let scrolled = scrollY - lastScrollValue
        ySetterSmall(mouse.y + scrolled)
        ySetterLarge(mouse.y + scrolled)
        mouse = {...mouse, y: mouse.y + scrolled}
        lastScrollValue = scrollY
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