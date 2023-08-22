import { useForm } from 'react-hook-form'
import { sendMail } from '../../utils/sendMail'
import './styles.scss'

export function Contact({ theme, t }) {
  const { register, handleSubmit, reset } = useForm()

  return (
    <article id='contact' className={theme}>
      <h1>{t('contactme')}</h1>
      <form onSubmit={handleSubmit(data => {
      sendMail(data)
      reset()
      })}>
        <section className='headers'>
          <input placeholder={t('name')} autoComplete='off' {...register('name')} />
          <input type='email' placeholder={t('email')} autoComplete='off' {...register('email')} />
        </section>
        <textarea rows='10' placeholder={t('message')} {...register('message')} />
        <input type='submit' value={t('submit')} />
      </form>
      <ul className='socials'>
        <li>
          <a href='https://linkedin.com/in/matheusgesser/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </li>
        <li>
          <a href='https://github.com/matheusgesser/' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </li>
        <li>
        <a href='mailto:matheusmvg@hotmail.com'>E-mail</a>
        </li>
      </ul>
    </article>
  )
}