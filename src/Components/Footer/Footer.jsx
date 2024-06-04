import React from 'react'
import './Footer.css'
import emailIcon from '../../assets/emailIcon.svg'
function Footer() {
  return (
    <div className='footer'>
        <div className="f-top">
            <div className="f-top-left">
                {/* <img src="" alt="" /> */}
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corporis!</p>
            </div>
            <div className="f-top-right">
                <div className="f-email-input">
                    <img src={emailIcon} alt="" />
                    <input type="text" placeholder='Enter your email'/>
                </div>
                <div className="f-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="f-bottom">
            <p className="f-bottom-left">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="f-bottom-right">
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum.</p>
            </div>
        </div>
    </div>

  )
}

export default Footer
