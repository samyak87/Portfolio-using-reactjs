import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
    
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Samyak Jain</h1>
        <h5 className="text-light">Frontend Developer and Competitive Programmer</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <div className="me">
          <img src={ME} className="mypic" alt="my-image" />
        </div>
        
  
        
      </div>
    </header>
    
  )
}

export default Header