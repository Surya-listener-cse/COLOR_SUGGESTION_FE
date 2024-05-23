import React from 'react'
import './landing.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';  
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate()
  return <>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary topbar">
      <Container>
        <Navbar.Brand href="#home" className='brand'><span>S</span>TYLE_<span>B</span>OOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='space-between nav-text'>
              <Link to='home' >Home</Link>
              <Link to='service' >Service</Link>
              <Link to='community' >Community</Link>
              <Link to='testimonial' >Testimonial</Link>
              <Link to='contact' >Contuct_Us</Link>
              <Nav onClick={()=>navigate('/signin')} className='login-button' >LOGIN</Nav>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar;