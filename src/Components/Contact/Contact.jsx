import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact-me'>
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, reprehenderit.</p>
          <div className="contact-details">
            <div className="contact-detail">vk@gmail.com</div>
            <div className="contact-detail">9999999999</div>
          </div>
        </div>

        {/* Right side */}
        <div className="contact-right">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Enter your name' />
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Enter your email' />
            <label htmlFor="">Your Message</label>
            <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-btn">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
