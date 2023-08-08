import './styles.scss'
import { useAnimations } from './useAnimations'
import ProfilePic from '../../assets/profile.jpg'
import { RxDownload } from 'react-icons/rx'

export function About({ theme, t }) {
  useAnimations()

  return (
    <main id='about' className={theme}>
      <section className="profile">
        <img src={ProfilePic} alt="Matheus' front picture" />
          <section className='content'>
            <p><span>❝</span>{t('aboutme')}<span>❞</span></p>
            <a href={t('pdf')} target='_blank' rel='noreferrer'>
              <RxDownload />{t('resume')}
            </a>
          </section>
      </section>
      <section className="skills">
        <h2 className='major'>React</h2>
        <h2 className='major'>JavaScript</h2>
        <h2>TypeScript</h2>
        <h2>Git</h2>
        <h2>HTML</h2>
        <h2 className='major'>CSS</h2>
        <h2>Sass</h2>
        <h2>NodeJS</h2>
        <h2>SQL</h2>
      </section>
    </main>
  )
}