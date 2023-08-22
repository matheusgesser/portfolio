import { useState } from 'react'
import { Home, About, Projects, Contact } from './pages'
import { Things, Cursor } from './components'
import BR from './assets/lang/br.json'
import US from './assets/lang/us.json'
import { gsap } from 'gsap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('br')

  function handleToggleTheme() {
    setTheme((prevTheme) => prevTheme == 'dark' ? 'light' : 'dark')
    gsap.fromTo('.theme-switcher', {rotate: '360deg', scale: 0}, {rotate: 0, scale: 1, duration: 1})
  }

  function toggleLang() {
    setLang(lang == 'br' ? 'us' : 'br')
  }

  function translation(id) {
    return lang == 'br' ? BR[`${id}`] : US[`${id}`]
  }

  return (
    <>
      <Things theme={theme} handleToggleTheme={handleToggleTheme} lang={lang} toggleLang={toggleLang} t={translation} />
      <main className="pages">
        <Home theme={theme} t={translation} />
        <About theme={theme} t={translation} />
        <Projects theme={theme} t={translation} />
        <Contact theme={theme} t={translation} />
      </main>
      <Cursor theme={theme} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  )
}
