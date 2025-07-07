import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
           <span className='navbar-heading'>Food</span>
           <ul type="none" className='Menu-list'>
              <li>Home</li>
              <li>About </li>
              <li>Menu </li>
              <li>Shop </li>
              <li>Blog</li>
              <li>Contact</li>
           </ul>
        </div>
    </>
  )
}

export default Navbar