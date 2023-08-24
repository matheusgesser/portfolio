import { useForm } from 'react-hook-form'
import { sendMail } from '../../utils/sendMail'
import './styles.scss'
import Tippy from '@tippyjs/react'
import { RxCopy } from 'react-icons/rx'

export function Contact({ theme, t }) {
  const { register, handleSubmit, reset } = useForm()

  function copyMail(event) {
    navigator.clipboard.writeText('matheusmvg@hotmail.com')
    setTimeout(() => {
      event.target._tippy.hide()
    }, 3000);
  }

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
      <span>{t('or')}</span>
      <Tippy trigger='click' placement='bottom' content={t('copy')} className={theme}>
        <button data-speedx={30} data-speedy={0} onClick={copyMail}>
          <RxCopy />matheusmvg@hotmail.com
        </button>
      </Tippy>
    </article>
  )
}