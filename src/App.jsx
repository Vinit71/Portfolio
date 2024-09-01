import LandingSection from "./Components/Landing/LandingSection"
import Navbar from "./Components/Navbar/Navbar"
import MyProjects from "./Components/Projects/MyProjects"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Skills from "./Components/Skills/Skills"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Toaster />
      <Navbar />
      <LandingSection />
      <Skills />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
