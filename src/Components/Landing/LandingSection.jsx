import portfolioProfile from '../../assets/profile1.webp'

function LandingSection() {
  return (
    <div id='home' className='flex flex-col items-center gap-8 mt-6'>
        {/* profile image */}
      <img src={portfolioProfile} alt="" 
      className="mt-6 h-[17.5rem] w-[17.5rem]"
      />

        {/* Bio */}
        <h1 className='text-center text-[30px] lg:text-[54px] font-normal mt-[-5px] w-[70%] leading-tight'>
          <span className='flex justify-center lg:text-[56px] bg-[#ffc300] bg-clip-text text-transparent font-bold'>Hello! I&apos;m Vinit</span> Frontend Developer</h1>
        <p className='text-center text-[24px] leading-[35px] mt-[-10px] w-[50%]'> Frontend developer with deep expertise in React and JavaScript, focused on developing high-performance user interfaces.</p>

        {/* buttons */}
        <div className="flex items-center gap-6 mt-1 text-[22px] font-medium">
            <div className="bg-[#ffc300] text-[#000814] rounded-full px-6 py-3 cursor-pointer hover:bg-white hover:text-[#000814] transition-colors">
              <a href="">Download CV</a>
            </div>
            <div className="border-2 border-white rounded-full px-10 py-3 cursor-pointer hover:text-[#ffc300] transition-colors">
              <a href="https://github.com/Vinit71" target="_blank">GitHub</a>
            </div>
        </div>

    </div>
  )
}

export default LandingSection
