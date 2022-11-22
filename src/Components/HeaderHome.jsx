import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/scss/HeaderHome.scss'
import { useSelector } from 'react-redux'
import { ACCESSTOKEN, settings, USER_LOGIN } from '../Ulti/Config';
import { useState } from 'react';
import { history } from '../index';
export default function HeaderHome() {

  const { userProfile } = useSelector(state => state.userReducer);
  const [cartQuantity,setCartQuantity] = useState(0)
  const {cartList} = useSelector(state => state.productReducer)
  
  
 useEffect(()=>{
  if(cartList){
    setCartQuantity(cartList.length);
  }
 },[cartList])


  const renderLogin = () => {
    if (userProfile.name) {
      // history.push('/profile');
      return <>
        <NavLink className='nav-link text-light' to='/profile'>Hello ! {userProfile.name}</NavLink>
        <button className='nav-link text-light' style={{ background: 'none', border: 'none' }} onClick={() => {
          settings.eraseCookie(ACCESSTOKEN, 0);
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(ACCESSTOKEN);
          window.location.href = '/login';
        }}>Đăng xuất</button>
      </>
    }
    return <NavLink className='nav-link text-light' to='/login'>Login</NavLink>
  }

  

  return (
    <div className='headerhome'>
      <div className="header">
        <div className='container-fluid'>
          <NavLink to={'/home'}><img src="img/image_3.png" alt="logo" className='logo' /></NavLink>
          <div className='header-item'>
            <NavLink className='search' to={'/search?keyword='}>
              <img src="img/search.png" alt="search-icon" />
              <span>Search</span>
            </NavLink>
            <NavLink className='cart' to={'/carts'}>
              <img src="img/cart.png" alt="cart" />
              <span>({cartQuantity})</span>
            </NavLink>
            {renderLogin()}
            <NavLink className='login' to='/register'><span>Register</span></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
