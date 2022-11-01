import React from 'react'
import '../Assets/scss/FooterHome.scss'

export default function FooterHome() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-4">
            <h2>GET HELP</h2>
            <h4>Home</h4>
            <h4>Nike</h4>
            <h4>Adidas</h4>
            <h4>Contact</h4>
          </div>
          <div className="col-4">
            <h2>SUPPORT</h2>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Help</h4>
            <h4>Phone</h4>
          </div>
          <div className="col-4">
            <h2>REGISTER</h2>
            <h4>Register</h4>
            <h4>Login</h4>
          </div>
        </div>
      </div>
      <div className='container-fluid author'>
        <p>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</p>
      </div>
    </div>

  )
}
