import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <NavLink to="/">
<img src={logo}/>
    </NavLink>
  )
}

export default Header