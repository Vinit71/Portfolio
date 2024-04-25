import React from 'react'
import './About.css'
import portfolioProfile from '../../assets/portfolioProfile.webp'

function About() {
  return (
    <div className='about-me'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="sections">

        <div className="about-left">
            <img src={portfolioProfile} alt="" />
        </div>

        <div className="about-right">
            <div className="about-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt tempora modi saepe.</p>
            </div>
            <div className="skills">
                <h2 className="skills-heading">Web Development</h2>
                <div className="skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                <div className="skill"><p>JS</p><hr style={{width:"80%"}} /></div>
                <div className="skill"><p>PHP</p><hr style={{width:"70%"}} /></div>
                <div className="skill"><p>MySQL</p><hr style={{width:"70%"}} /></div>
                <div className="skill"><p>Reactjs</p><hr style={{width:"75%"}} /></div>
            </div>
            <div className="skills">
            <h2 className='skills-heading'>Programming Languages</h2>
                <div className="skill"><p>C/C++</p><hr style={{width:"75%"}} /></div>
                <div className="skill"><p>Core java</p><hr style={{width:"80%"}} /></div>
                <div className="skill"><p>VB.NET</p><hr style={{width:"65%"}} /></div>
             
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
