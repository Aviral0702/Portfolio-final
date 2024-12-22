import './App.css'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import Resume from './Sections/Resume'

function App() {

  return (
    <>
      <Navbar/>
      <div className="sections-container">
        <Home/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </>
  )
}

export default App
