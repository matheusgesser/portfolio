import './styles.scss'
import JSLogo from '../../assets/home/js.png'
import ReactLogo from '../../assets/home/react.png'
import SassLogo from '../../assets/home/sass.png'
import { useAnimations } from './useAnimations'

export function Home({ theme, t }) {
  useAnimations()
  
  function IconMove(event) {
    let { clientX: posX, clientY: posY } = event;
    let icons = document.querySelectorAll('[data-speedx]')
    icons.forEach(icon => {
      icon.style.transform = `translate(${posX*icon.dataset.speedx/window.innerWidth}px, ${posY*icon.dataset.speedy/window.innerHeight}px)`
    })
  }

  return (
    <main id='home' className={theme} onMouseMove={IconMove}>
      <h1 data-speedx={12} data-speedy={-6}>Matheus Gesser</h1>
      <h2 data-speedx={16} data-speedy={-8}>{t('position')}</h2>
        <img src={JSLogo} id='js' data-speedx={-30} data-speedy={-50} alt="JavaScript Logo" />
        <img src={ReactLogo} id='react' data-speedx={60} data-speedy={-40} alt="React Logo" />
        <img src={SassLogo} id='sass' data-speedx={-50} data-speedy={60} alt="Sass Logo" />
    </main>
  )
}