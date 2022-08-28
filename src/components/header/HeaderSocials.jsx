import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoDribbble} from 'react-icons/io'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://github.com" target="blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="blank"><IoLogoDribbble/></a>
    </div>
  )
}

export default HeaderSocials