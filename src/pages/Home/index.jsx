import './styles.scss'
import JSLogo from '../../assets/home/js.png'
import ReactLogo from '../../assets/home/react.png'
import SassLogo from '../../assets/home/sass.png'
import { useAnimations } from './useAnimations'
import { RxCopy } from 'react-icons/rx'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


export function Home({ theme, t }) {
  useAnimations()
  
  function IconMove(event) {
    let { clientX: posX, clientY: posY } = event;
    let icons = document.querySelectorAll('[data-speedx]')
    icons.forEach(icon => {
      icon.style.transform = `translate(${posX*icon.dataset.speedx/window.innerWidth}px, ${posY*icon.dataset.speedy/window.innerHeight}px)`
    })
  }

  function copyMail(event) {
    navigator.clipboard.writeText('matheusmvg@hotmail.com')
    setTimeout(() => {
      event.target._tippy.hide()
    }, 3000);
  }

  return (
    <main id='home' className={theme} onMouseMove={IconMove}>
      <h1 data-speedx={20} data-speedy={0}>Matheus Gesser</h1>
      <h2 data-speedx={15} data-speedy={0}>{t('position')}</h2>
      <Tippy trigger='click' placement='bottom' content={t('copy')} className={theme}>
        <button data-speedx={30} data-speedy={0} onClick={copyMail}>
          <RxCopy />matheusmvg@hotmail.com
        </button>
      </Tippy>
      <img src={JSLogo} id='js' data-speedx={-30} data-speedy={-50} alt="JavaScript Logo" />
      <img src={ReactLogo} id='react' data-speedx={60} data-speedy={-40} alt="React Logo" />
      <img src={SassLogo} id='sass' data-speedx={-50} data-speedy={60} alt="Sass Logo" />
    </main>
  )
}