import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
// import { useState } from 'react'            /* important */

export const Nav = () => {
  // const [activeNav,setActiveNav]=useState('#')
  return (
   <nav>
     <a href="#" ><AiFillHome/></a>
     {/* className={activeNav==='#'?'active': ''} */}
     <a href="#about"><AiOutlineUser/></a>
     <a href="#experience"><HiOutlineBookOpen/></a>
     <a href="#testimonials"><RiCustomerService2Fill/></a>
     <a href="#contact"><IoMdContact/></a>
   </nav>
  )
}

export default Nav