import { useState } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className="relative flex items-center justify-between my-5 mx-8 lg:mx-[170px]">
      <div className="text-2xl font-semibold text-white lg:ml-[-7rem]">V-Dev71</div>

      <div className="lg:hidden">
        <button className="text-3xl text-white focus:outline-none"onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      <ul
        className={`${isOpen ? "block" : "hidden" } absolute top-full right-0 w-1/2 bg-black shadow-lg lg:flex lg:items-center lg:static lg:w-auto 
          lg:bg-transparent lg:shadow-none text-center lg:ml-[4.5rem] lg:text-left lg:gap-[50px] tracking-wider text-2xl text-white`}>
            
        <li className="cursor-pointer py-2 lg:py-0 lg:ml-0 border-b lg:border-b-0 border-white">
            <Link to="navbar" smooth={true} duration={500} className="text-white" spy={true} exact="true" offset={-50}>Home</Link>
        </li>

        <li className="cursor-pointer py-2 lg:py-0 border-b lg:border-b-0 border-white">
            <Link to="skills" smooth={true} duration={500} className="text-white" spy={true} exact="true" offset={-50}>Skills</Link>
        </li>

        <li className="cursor-pointer py-2 lg:py-0 border-b lg:border-b-0 border-white">
            <Link to="projects" smooth={true} duration={500} className="text-white" spy={true} exact="true" offset={-50}>Projects</Link>
        </li>

        <li className="cursor-pointer py-2 lg:py-0 border-b lg:border-b-0 border-white">
            <Link to="contact" smooth={true} duration={500} className="text-white" spy={true} exact="true" offset={-50}>Contact</Link>
        </li>
      </ul>

      <div className="hidden lg:block mr-[-8rem] text-xl px-5 py-2 rounded-full bg-blue-600 text-white cursor-pointer transition-transform duration-500 hover:scale-105">
        <a href="https://www.linkedin.com/in/vinitkumar-intech-dev71" target="_blank">LinkedIn</a>
      </div>
    </nav>
  );
}

export default Navbar;
