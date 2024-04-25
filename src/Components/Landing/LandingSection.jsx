import React from 'react'
import './LandingSection.css'
import portfolioProfile from '../../assets/portfolioProfile.webp'

function LandingSection() {
  return (
    <div className='hero-sec'>
        {/* profile image */}
      <img src={portfolioProfile} alt="" />

        {/* Bio */}
        <h1><span>Hello! I'm Vinit,</span> Full stack Developer</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nostrum.</p>

        {/* buttons */}
        <div className="hero-action">
            <div className="download-CV">Download CV</div>
            <div className="linkedin">LinkedIn</div>
        </div>

    </div>
  )
}

export default LandingSection
