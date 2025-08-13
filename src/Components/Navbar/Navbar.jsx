import React from 'react'
import "./navbar.css"
import chef from "../../assets/chef.png"
import healthyfood from "../../assets/healthy-food.png"
const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='Foody-icon'>
          <img src={chef} alt="chef" className='chef' />
          <span className='navbar-heading'> Food <img src={healthyfood} /></span>
        </div>
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