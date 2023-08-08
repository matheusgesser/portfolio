import './styles.scss'
// import { useAnimations } from './useAnimations'

export function Projects({ theme, t }) {
  // useAnimations()

  return (
    <main id='projects' className={theme}>
      <h1>Projects {t('resume')}</h1>
    </main>
  )
}