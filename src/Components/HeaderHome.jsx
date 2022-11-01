import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/scss/HeaderHome.scss'

export default function HeaderHome() {
  return (
    <div className="header">
      <div className='container-fluid'>
        <img src="img/image_3.png" alt="logo" className='logo' />
        <div className='header-item'>
          <div className='search'>
            <img src="img/search.png" alt="search-icon" />
            <span>Search</span>
          </div>
          <div className='cart'>
            <img src="img/cart.png" alt="cart" />
            <span>(1)</span>
          </div>
          <NavLink className='login' to='/login'>Login</NavLink>
          <NavLink className='login' to='/register'><span>Register</span></NavLink>
        </div>
      </div>
    </div>
  )
}
