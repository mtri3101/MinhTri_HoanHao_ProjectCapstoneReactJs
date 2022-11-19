import React from 'react'
//import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { LoginFacebookApi } from '../../Redux/userReducer/userReducer';

export default function LoginFacebook() {
  const dispatch = useDispatch();
    const responseFacebook = (response) =>{
        console.log(response);
        const action = LoginFacebookApi(response.accessToken);
        dispatch(action);
    }
  return (
    <div className='text-center mt-2'>
      {/* <FacebookLogin
      appId="424168889872775"
      // autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}/> */}
    </div>
  )
}
