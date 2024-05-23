import React from 'react'
import TopBar from './TopBar'
import About from './About'
import Services from './Services'
import Community from './Community'
import Testimonial from './Testimonial'
import ContactUs from './ContactUs'



function LandingPage() {
  return <>

    <div className='landing-page'>
        <TopBar/>
        <About/>
        <Services/>
        <Community/>
        <Testimonial/>  
        <br />
        <ContactUs/>
    </div>

  </>
}

export default LandingPage