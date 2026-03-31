import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import LoadingSpinner from './components/LoadingSpinner'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Experience = lazy(() => import('./pages/Experience'))
const Contact = lazy(() => import('./pages/Contact'))
const CaseStudyTanUM = lazy(() => import('./pages/case-studies/TanUM'))
const CaseStudyMindspace = lazy(() => import('./pages/case-studies/Mindspace'))
const CaseStudyRealiTech = lazy(() => import('./pages/case-studies/RealiTech'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
