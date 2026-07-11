import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  profile,
  skillCategories,
  tools,
  certifications,
  engagements,
} from './data/content'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills categories={skillCategories} />
        <Tools tools={tools} />
        <Certifications certifications={certifications} />
        <Experience engagements={engagements} yearsExperience={profile.yearsExperience} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  )
}

export default App
