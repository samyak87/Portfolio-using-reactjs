import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineBookOpen} from 'react-icons/hi'


export const Nav = () => {
  return (
   <nav>
     <a href="#" ><AiFillHome/></a>
     <a href="#about"><AiOutlineUser/></a>
     <a href="#experience"><HiOutlineBookOpen/></a>
    
   </nav>
  )
}

export default Nav