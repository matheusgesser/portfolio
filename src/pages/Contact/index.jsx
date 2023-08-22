import { useForm } from 'react-hook-form'
import { sendMail } from '../../utils/sendMail'
import './styles.scss'

import './styles.scss'
// import { useAnimations } from './useAnimations'

export function Contact({ theme, t }) {
  const { register, handleSubmit, reset } = useForm()

  // useAnimations()

  return (
    <article id='contact' className={theme}>
      <h1>{t('contactme')}</h1>
      <form onSubmit={handleSubmit(data => {
      sendMail(data)
      reset()
      })}>
        <section className="headers">
          <input placeholder={t('name')} autoComplete='off' {...register("name")} />
          <input type="email" placeholder={t('email')} autoComplete='off' {...register("email")} />
        </section>
        <textarea rows='10' placeholder={t('message')} {...register("message")} />
        <input type="submit" value={t('submit')} />
      </form>
    </article>
  )
}