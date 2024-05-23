import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  return <>
  <div name='home' className="about">
    <div className='about-content-div'>
      <p>Cloths are not going to change the world</p>
      <p><span>The Women who wear them will</span></p>
      <button onClick={()=>navigate('/signup')}>Sigup Now!</button>
    </div>
  </div>
  </>
}

export default About;