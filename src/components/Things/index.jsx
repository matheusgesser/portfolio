import './styles.scss'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillHome, AiFillQuestionCircle, AiFillCode, AiFillMessage } from 'react-icons/ai'
import USFlag from '../../assets/flags/us.svg'
import BRFlag from '../../assets/flags/br.svg'

export function Things({ theme, toggleTheme, lang, toggleLang }) {

  document.addEventListener('scroll', () => {
    let navBar = document.querySelector('aside.navigation')
    navBar.querySelectorAll('.active').forEach(el => {
      el.classList.remove('active')
    })
    console.log(scrollY)
    if (scrollY < 550) {
      navBar.querySelector('[href="#home"]').classList.add('active')
    } else if (scrollY > 2700) {
      navBar.querySelector('[href="#contact"]').classList.add('active')
    } else if (scrollY > 1600) {
      navBar.querySelector('[href="#projects"]').classList.add('active')
    } else if (scrollY > 550) {
      navBar.querySelector('[href="#about"]').classList.add('active')
    }
  })

  return (
    <>
      <aside className={`top ${theme}`}>
        <a href='#home'>
          <strong>MG {theme} {lang}</strong>
        </a>
        <button className='theme-switcher' onClick={toggleTheme}>
          {theme == 'light' ?
          <MdDarkMode /> :
          <MdLightMode />}
        </button>
        <button className='lang-switcher' onClick={toggleLang}>
          {lang == 'br' ?
          <img src={USFlag} alt='United States Flag' /> :
          <img src={BRFlag} alt='Brazil Flag' />}
        </button>
      </aside>

      <aside className={`socials ${theme}`}>
        <a href='https://github.com/matheusgesser' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/matheusgesser/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='mailto:matheusmvg@hotmail.com' target='_blank' rel='noreferrer'><GrMail /></a>
        <div className='line' />
      </aside>

      <aside className={`navigation ${theme}`}>
        <a href='#home' className='active'><AiFillHome /></a>
        <a href='#about'><AiFillQuestionCircle /></a>
        <a href='#projects'><AiFillCode /></a>
        <a href='#contact'><AiFillMessage /></a>
      </aside>
    </>
  )
}