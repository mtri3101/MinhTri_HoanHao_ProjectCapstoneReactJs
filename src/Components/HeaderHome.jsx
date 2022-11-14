import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/scss/HeaderHome.scss'
import { useSelector } from 'react-redux'
import { ACCESSTOKEN, settings, USER_LOGIN } from '../Ulti/Config';
export default function HeaderHome() {

  const { userProfile } = useSelector(state => state.userReducer);
  const renderLogin = () => {
    if (userProfile.name) {
      return <>
        <NavLink className='nav-link text-light' to='/profile'>Hello ! {userProfile.name}</NavLink>
        <button className='nav-link text-light' style={{background:'none',border:'none'}} onClick={()=>{
          settings.eraseCookie(ACCESSTOKEN,0);
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
