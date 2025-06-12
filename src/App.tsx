import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"
import Footer from "./components/Footer/Footer"
import ExperienceSection from "./Pages/Home/sections/ExperienceSection/ExperienceSection"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection/>
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
