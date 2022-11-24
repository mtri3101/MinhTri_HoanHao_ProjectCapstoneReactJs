import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/scss/HeaderHome.scss'
import { useSelector } from 'react-redux'
import { ACCESSTOKEN, settings, USER_LOGIN } from '../Ulti/Config';
import { useState } from 'react';
import { history } from '../index';
export default function HeaderHome() {

  const { userProfile } = useSelector(state => state.userReducer);
  const [cartQuantity, setCartQuantity] = useState(0)
  const { cartList } = useSelector(state => state.productReducer)


  useEffect(() => {
    if (cartList) {
      setCartQuantity(cartList.length);
    }
  }, [cartList])


  const renderLogin = () => {
    if (userProfile.name) {
      // history.push('/profile');
      return <>
        <li className="nav-item profile">
          <NavLink className=' text-light profile' to='/profile'>Hello ! {userProfile.name}</NavLink>
        </li>
        <li className="nav-item logout">
          <button className=' text-light header-links logout' style={{ background: 'none', border: 'none' }} onClick={() => {
            settings.eraseCookie(ACCESSTOKEN, 0);
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(ACCESSTOKEN);
            window.location.href = '/login';
          }}>Đăng xuất</button>
        </li>
      </>
    }
    return <NavLink className=' text-light header-links login' to='/login'>Login</NavLink>
  }



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light headerHome">
      <div className="container-fluid">
        <NavLink to={'/home'}><img src="img/image_3.png" alt="logo" className='logo' /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item search">
              <NavLink className='search header-links' to={'/search?keyword='}>
                <img src="img/search.png" alt="search-icon" />
                <span>Search</span>
              </NavLink>
            </li>
            <li className="nav-item cart">
              <NavLink className='cart' to={'/carts'}>
                <img src="img/cart.png" alt="cart" />
                <span>({cartQuantity})</span>
              </NavLink>
            </li>
            {renderLogin()}
            <li className="nav-item">
              <NavLink className="nav-link register" to='/register'>Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
