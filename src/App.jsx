import './style.css'
import Header from './components/Header'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(false)

  function handleTheme(){
    setTheme(prevTheme => !prevTheme) 
  }

  const mode = theme ? 'light' : ''

  return (
    <div className={mode} id='App'>
      <Header 
        lightMode={theme}
        handleClick={handleTheme}
      />
      <About lightMode={theme}/>
      <Interests lightMode={theme}/>
      <Footer lightMode={theme}/>
    </div>
  )
}

export default App
