import { useState } from 'react'
import { Home, About, Projects, Contact } from './pages'
import { Things, Cursor } from './components'
import BR from './assets/lang/br.json'
import US from './assets/lang/us.json'


export default function App() {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('br')

  function toggleTheme() {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  function toggleLang() {
    setLang(lang == 'br' ? 'us' : 'br')
  }

  function translation(id) {
    return lang == 'br' ? BR[`${id}`] : US[`${id}`]
  }

  return (
    <>
      <Things theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      <div className="pages">
        <Home theme={theme} t={translation} />
        <About theme={theme} t={translation} />
        <Projects theme={theme} t={translation} />
        <Contact theme={theme} t={translation} />
      </div>
      <Cursor theme={theme} />
    </>
  )
}
