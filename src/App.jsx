import './App.css'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Experience from './Sections/Experience'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <div className="sections-container">
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
