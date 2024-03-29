import './styles.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillHome, AiFillQuestionCircle, AiFillCode, AiFillMessage } from 'react-icons/ai'
import USFlag from '../../assets/flags/us.svg'
import BRFlag from '../../assets/flags/br.svg'
import { useAnimations } from './useAnimations';

export function Things({ theme, handleToggleTheme, lang, toggleLang, t }) {
  useAnimations()

  document.addEventListener('scroll', () => {
    let navBar = document.querySelector('aside.navigation')
    navBar.querySelectorAll('.active').forEach(el => {
      el.classList.remove('active')
    })
    if (scrollY < 550) {
      navBar.querySelector('[href="#home"]').classList.add('active')
    } else if (scrollY > 2400) {
      navBar.querySelector('[href="#contact"]').classList.add('active')
    } else if (scrollY > 1500) {
      navBar.querySelector('[href="#projects"]').classList.add('active')
    } else if (scrollY > 550) {
      navBar.querySelector("[href='#about']").classList.add('active')
    }
    let socialsAside = document.querySelector('aside.socials')
    if (navBar.querySelector('[href="#home"]').classList == '') {
      socialsAside.classList.add('active')
    } else {
      socialsAside.classList.remove('active')
    }
  })

  return (
    <>
      <aside className={`top ${theme}`}>
        <a href='#home'>
          <strong>M</strong>
          <span className='hover-reveal'>atheus</span>
          <strong>G</strong>
          <span className='hover-reveal'>esser</span>
        </a>
        <button className='theme-switcher' onClick={handleToggleTheme}>
          {theme == 'dark' ?
          <MdDarkMode /> :
          <MdLightMode />}
        </button>
        <button className='lang-switcher' onClick={toggleLang}>
          {lang == 'us' ?
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
        <Tippy placement='left' content={t('home')} className={theme}>
          <a href='#home' className='active'><AiFillHome /></a>
        </Tippy>
        <Tippy placement='left' content={t('about')} className={theme}>
          <a href='#about'><AiFillQuestionCircle /></a>
        </Tippy>
        <Tippy placement='left' content={t('projects')} className={theme}>
          <a href='#projects'><AiFillCode /></a>
        </Tippy>
        <Tippy placement='left' content={t('contact')} className={theme}>
          <a href='#contact'><AiFillMessage /></a>
        </Tippy>
      </aside>

      <div className={`bg ${theme}`}></div>
    </>
  )
}