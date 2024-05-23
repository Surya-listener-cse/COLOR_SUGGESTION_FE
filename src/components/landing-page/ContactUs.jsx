import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactUs() {
  return (
    <div name='contact' className='contact-us'>
      <div className="contact-container">
        <div className='address'>
          <h3 className='brand footer-brand'><span>S</span>TYLE <span>B</span>OOK</h3>
          <p>No.24/1 , Sample Street</p>
          <p>Sample City , 642104</p>
        </div>
        <div className='quick-links'>
          <h6>Quick Links</h6>
          <small>Terms of service</small><br />
          <small>Privacy Policy</small>
        </div>
        <div className='contact'>
          <h6>Contact Us</h6>
          <small><a href="mailto:sarankumartsk@gmail.com">sarankumartsk@gmail.com</a></small><br />
          <small><a href="tel:8675750594">8675750594</a></small>
        </div>
        <div className='follow'>
          <h6>Follow Us</h6>
          <div>
            <FacebookIcon/>
            <XIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default ContactUs