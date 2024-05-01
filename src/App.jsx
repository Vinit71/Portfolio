import LandingSection from "./Components/Landing/LandingSection"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import MyProjects from "./Components/Projects/MyProjects"
import Contact from "./Components/Contact/Contact"

function App() {

  return (
    <>
      <Navbar />
      <LandingSection />
      <About />
      <MyProjects />
      <Contact />
    </>
  )
}

export default App
