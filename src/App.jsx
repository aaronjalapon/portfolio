import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import CaseStudyTanUM from './pages/case-studies/TanUM'
import CaseStudyMindspace from './pages/case-studies/Mindspace'
import CaseStudyRealiTech from './pages/case-studies/RealiTech'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects/tanum" element={<CaseStudyTanUM />} />
        <Route path="projects/mindspace" element={<CaseStudyMindspace />} />
        <Route path="projects/realitech" element={<CaseStudyRealiTech />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
