import './App.css'
import AboutMe from './component/About/AboutMe'
import { lazy } from 'react';

const Projects = lazy(() => import('./component/projects/Projects'))
const Skills = lazy(() => import('./component/Skill/Skills'))
const ContactMe = lazy(() => import('./component/Contact/ContactMe'))


function App() {

  return (
    <>
      <AboutMe/>
      <Projects/>
      <Skills />
      <ContactMe />
    </>
  )
}

export default App
