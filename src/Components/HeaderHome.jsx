import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/css/HeaderHome.css'
import {useSelector} from 'react-redux'

export default function HeaderHome() {

  const {userLogin} = useSelector(state => state.userReducer);
  const renderLogin = () =>{
    if(userLogin.email){
      return <NavLink className='nav-link text-light' to='/profile'>Hello ! {userLogin.email}</NavLink>
    }
    return <NavLink className='nav-link text-light' to='/login'>Login</NavLink>
  }

  return (
    <div className='headerhome'>
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
            {renderLogin()}
            <NavLink className='login' to='/register'><span>Register</span></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
