import './styles.scss'
import JSLogo from '../../assets/home/js.png'
import ReactLogo from '../../assets/home/react.png'
import SassLogo from '../../assets/home/sass.png'
import { useAnimations } from './useAnimations'
import { RxCopy } from 'react-icons/rx'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { gsap } from 'gsap'

export function Home({ theme, t }) {
  useAnimations()

  function moveElements(event) {
    let { clientX: posX, clientY: posY } = event;
    let elements = document.querySelectorAll('[data-speedx]')
    elements.forEach(element => {
      let moveX = gsap.quickTo(element, 'x', {duration: 0.2, ease: 'power3'})
      let moveY = gsap.quickTo(element, 'y', {duration: 0.2, ease: 'power3'})
      moveX(`${posX*element.dataset.speedx/window.innerWidth}`)
      moveY(`${posY*element.dataset.speedy/window.innerHeight}`)
    });
  }

  function copyMail(event) {
    navigator.clipboard.writeText('matheusmvg@hotmail.com')
    setTimeout(() => {
      event.target._tippy.hide()
    }, 3000);
  }

  return (
    <article id='home' className={theme} onMouseMove={moveElements}>
      <h1 data-speedx={20} data-speedy={0}>Matheus Gesser</h1>
      <h2 data-speedx={15} data-speedy={0}>{t('position')}</h2>
      <Tippy trigger='click' placement='bottom' content={t('copy')} className={theme}>
        <button data-speedx={30} data-speedy={0} onClick={copyMail}>
          <RxCopy />matheusmvg@hotmail.com
        </button>
      </Tippy>
      <img src={JSLogo} id='js' data-speedx={-30} data-speedy={-50} alt='JavaScript Logo' />
      <img src={ReactLogo} id='react' data-speedx={60} data-speedy={-40} alt='React Logo' />
      <img src={SassLogo} id='sass' data-speedx={-50} data-speedy={60} alt='Sass Logo' />
    </article>
  )
}