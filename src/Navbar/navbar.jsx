import "./navbar.css"
import React from 'react'
import logo from "../Assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
            <img className='my-logo' src={logo} alt='logo'/>
            <div className='links'>
              <a href='' className='navigations'>Home</a>
              <a href='' className='navigations'>About</a>
              <a href='' className='navigations'>Contact</a>
              <a href='' className='navigations'>Blog</a>
              <a href='' className='navigations'>Careers</a>
            </div>
            <button className='my-btn buton' type='button'>Request Invite</button>
            </div>
  )
}

export default Navbar