import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiCodechef} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {FaHackerrank} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/samyak-jain-529371202/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/samyak87" target="_blank"><AiFillGithub/></a>
        <a href="https://www.codechef.com/users/sk1231" target="_blank"><SiCodechef/></a>
        <a href="https://codeforces.com/profile/samyaksk10" target="_blank"><SiCodeforces/></a>
        <a href="https://leetcode.com/samyaksk10/" target="_blank"><SiLeetcode/></a>
        <a href="https://auth.geeksforgeeks.org/user/samyaksk10/practice" target="_blank"><SiGeeksforgeeks/></a>
        <a href="https://www.hackerrank.com/samyaksk10" target="_blank" rel="noreferrer"><FaHackerrank/></a>
      

        
    </div>
  )
}

export default HeaderSocials