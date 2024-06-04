import LandingSection from "./Components/Landing/LandingSection"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import MyProjects from "./Components/Projects/MyProjects"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Skills from "./Components/Skills/Skills"

function App() {

  return (
    <>
      <Navbar />
      <LandingSection />
      {/* <About /> */}
      <Skills />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
