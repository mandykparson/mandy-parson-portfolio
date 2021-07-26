import './App.css';
import AboutMe from './Components/AboutMe';
import Blog from './Components/Blog';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import { useState, useRef } from 'react'

function App() {

  const [ isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [ isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [ isResumeOpen, setIsResumeOpen] = useState(false)
  const [ isBlogOpen, setIsBlogOpen] = useState(false)

  const aboutMeRef = useRef(null)
  const projectsRef = useRef(null)
  const resumeRef = useRef(null)
  const blogRef = useRef(null)

  const toggleAboutMe = () => {
    setIsAboutMeOpen(!isAboutMeOpen)
  }
  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen)
  }
  const toggleResume = () => {
    setIsResumeOpen(!isResumeOpen)
  }
  const toggleBlog = () => {
    setIsBlogOpen(!isBlogOpen)
  }

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <div className="slider" ref={aboutMeRef}className="about-me" onClick={toggleAboutMe}>
          <AboutMe />
        </div>
        <div className="slider" className="projects" onClick={toggleProjects}>
          <Projects />
        </div>
        <div className="slider" className="resume" onClick={toggleResume}>
          <Resume />
        </div>
        <div className="slider" className="blog" onClick={toggleBlog}>
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;
