import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/samyak-jain-529371202/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/samyak87" target="_blank"><AiFillGithub/></a>
        <a href="https://www.instagram.com/mr.jain_samyak/" target="_blank"><AiOutlineInstagram/></a>

        
    </div>
  )
}

export default HeaderSocials