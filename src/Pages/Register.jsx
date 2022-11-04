import React from 'react'
import "../Assets/scss/Register.scss"
export default function Register() {
  return (
    <form className='form-group'>
      <h3>Register</h3>
      <form className='container'>
        <div className='row'>
          <div className='col-6 left'>
            <div className='form-group email'>
              <p>Email</p>
              <input type="text" placeholder='Email' />
            </div>
            <div className='form-group password'>
              <p>Password</p>
              <input type="password" placeholder='Password' />
            </div>
            <div className='form-group passwordconfirm'>
              <p>Password conFirm</p>
              <input type="password" placeholder='Password confirm' />
            </div>
          </div>
          <div className='col-6 right'>
            <div className='form-group name'>
              <p>Name</p>
              <input type="text" placeholder='Name' />
            </div>
            <div className='form-group phone'>
              <p>Phone</p>
              <input type="text" placeholder='Phone' />
            </div>
            <div className='form-group gender'>
              <span>Gender</span>
              <input className='mx-2' type="radio" name="male" id="male" value={true} />
              <label htmlFor="male">Male</label>
              <input className='mx-2' type="radio" name="female" id="female" value={false} />
              <label htmlFor="female">Female</label>
            </div>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </div>
      </form>
    </form>
  )
}
