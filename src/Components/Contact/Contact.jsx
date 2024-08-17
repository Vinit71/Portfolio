function Contact() {
  return (
    <div className='flex flex-col items-center justify-center  lg:gap-[75px] lg:my-[80px] lg:mx-[170px]'>
      
      <div className="flex flex-col items-center  p-0 px-[25px] mb-[35px]  lg:text-center">
        <h1 className="mt-12 text-[32px] font-semibold lg:text-[80px]">Contact me</h1>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center text-center gap-[50px] lg:gap-[150px]">
       <div className="flex flex-col items-start lg:gap-[30px]">
  <h1 className="text-[31px] font-semibold bg-[#ffc300] bg-clip-text text-transparent whitespace-nowrap lg:mt-[0.5rem] lg:text-[55px]">
    Let's talk
  </h1>

  <p className="text-white text-[22px] leading-[35px] text-left max-w-full">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, reprehenderit.
  </p>

  <div className="text-white text-[20px] flex flex-col gap-[30px]">
    <div className="flex items-center gap-[20px]">vk@gmail.com</div>
    <div className="flex items-center gap-[20px]">9999999999</div>
  </div>
</div>

        <div className="flex flex-col items-start gap-[30px]">
          <label className="text-white text-[24px] font-normal mb-[-18px]" htmlFor="name">Name</label>
          <input 
            type="text" 
            name='name' 
            placeholder='Enter your name' 
           className="border-none w-[300px] sm:w-[400px] md:w-[500px] h-[50px] pl-[20px] rounded-[2px] bg-gray-300 text-blue-800 text-[20px]"/>

          <label className="text-white text-[24px] font-normal" htmlFor="email">Email</label>
          <input 
            type="email" 
            name='email' 
            placeholder='Enter your email' 
            className="border-border-none w-[300px] sm:w-[400px] md:w-[500px] h-[50px] pl-[20px] rounded-[2px] bg-gray-300 text-blue-800 text-[20px]" />
            
          <label className="text-white text-[24px] font-normal" htmlFor="message">Your Message</label>
          <textarea 
            name="message" 
            rows="10" 
            placeholder='Enter your message'
            className="w-[300px] sm:w-[400px] md:w-[500px] h-[100px] border-none p-[25px] rounded-[2px] bg-gray-300 text-black text-[20px]" ></textarea>
          <button 
            type='submit' 
            className="border-none rounded-full bg-[#ffc300] text-[#000814] text-[22px] font-semibold tracking-[1.5px] py-[10px] 
            px-[25px] mb-[50px] cursor-pointer transition-transform transform hover:scale-[1.04]">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
