import './App.css'
import AboutMe from './component/About/AboutMe'
import ContactMe from './component/Contact/ContactMe'
import Navbar from './component/Navbar/Navbar'
import Skills from './component/Skill/Skills'
import Projects from './component/projects/Projects'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <AboutMe/>
      <Projects/>
      <Skills />
      <ContactMe />
    </>
  )
}

export default App
