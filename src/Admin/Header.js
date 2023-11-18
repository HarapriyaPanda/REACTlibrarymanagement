import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <nav className='navbar-vertical bg-dark navbar-dark fs-4 '>
  
    <ul className='navbar-nav'>
      <li className='nav-item active'>
        <NavLink className='nav-link' to="/Admin">Admin</NavLink>
      </li>
    
      <li className='nav-item active'>
        <NavLink className='nav-link' to="/AddStudent">Student</NavLink>
      </li>
     
      <li className='nav-item active'>
        <NavLink className='nav-link' to="/AddTeacher">Teacher</NavLink>
      </li>
      
      <li className='nav-item active'>
        <NavLink className='nav-link' to="/Book">Book</NavLink>
      </li>
    </ul>
  </nav>
    </div>
  )
}

export default Header
