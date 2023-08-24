import './styles.scss'
import JSLogo from '../../assets/home/js.png'
import ReactLogo from '../../assets/home/react.png'
import SassLogo from '../../assets/home/sass.png'
import { useAnimations } from './useAnimations'
import 'tippy.js/dist/tippy.css';
import { gsap } from 'gsap'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export function Home({ theme, t }) {
  useAnimations()

  function moveElements(event) {
    let { clientX: posX, clientY: posY } = event;
    let elements = document.querySelectorAll('[data-speedx]')
    elements.forEach(element => {
      let moveX = gsap.quickTo(element, 'x', {duration: 0.2, ease: 'power3'})
      let moveY = gsap.quickTo(element, 'y', {duration: 0.2, ease: 'power3'})
      moveX(`${posX*element.dataset.speedx/window.innerWidth-12}`)
      moveY(`${posY*element.dataset.speedy/window.innerHeight}`)
    });
  }

  return (
    <article id='home' className={theme} onMouseMove={moveElements}>
      <h1 data-speedx={30} data-speedy={0}>Matheus Gesser</h1>
      <h2 data-speedx={25} data-speedy={0}>{t('position')}</h2>
      <ul className='socials'>
        <li>
          <a href='https://linkedin.com/in/matheusgesser/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/matheusgesser/' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
        </li>
        <li>
        <a href='mailto:matheusmvg@hotmail.com'>
          <GrMail />
        </a>
        </li>
      </ul>
      <img src={JSLogo} id='js' data-speedx={-30} data-speedy={-50} alt='JavaScript Logo' />
      <img src={ReactLogo} id='react' data-speedx={60} data-speedy={-40} alt='React Logo' />
      <img src={SassLogo} id='sass' data-speedx={-50} data-speedy={60} alt='Sass Logo' />
    </article>
  )
}