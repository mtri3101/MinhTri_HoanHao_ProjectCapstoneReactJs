import React from 'react'
import FacebookLogin from 'react-facebook-login';

export default function LoginFacebook() {
    const responseFacebook = (response) =>{
        console.log(response);
    }
  return (
    <div className='text-center mt-2'>
      <FacebookLogin
      appId="1256871085168128"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}/>
    </div>
  )
}
