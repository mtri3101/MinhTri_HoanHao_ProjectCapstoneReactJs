import React from 'react'
import "../Assets/scss/Login.scss"
import LoginFacebook from '../Components/LoginFacebook/LoginFacebook'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginApi } from '../Redux/userReducer/userReducer'
import { NavLink } from 'react-router-dom'
export default function Login() {
  const { userLogin } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Vui lòng nhập vào email !').email('Email không đúng định dạng !'),
      password: yup.string().required('Vui lòng nhập vào password !').min(6, 'Password từ 6 - 20 ký tự !').max(20, 'Password từ 6 - 20 ký tự !'),
    }),
    onSubmit: (values) =>{
      console.log(values)
      const action = loginApi(values);
      dispatch(action);
    }
  });

  return (
    <form className='form-group' onSubmit={frm.handleSubmit}>
      <h3 className='login'>Login</h3>
      <div className='form-container'>
        <div className='form-control-email'>
          <p>Email</p>
          <input type="text" name='email' id='email' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
          {frm.errors.email ? <p className='text text-danger'>{frm.errors.email}</p> : ''}
        </div>
        <div className='form-control-password'>
          <p>Password</p>
          <input type="password" name='password' id='password' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
          {frm.errors.password ? <p className='text text-danger'>{frm.errors.password}</p> : ''}
        </div>
        <div className='form-control-btn'>
          <NavLink to="/register" className='me-4 text-decoration-none'>Register now ?</NavLink>
          <button className='btn btn-primary'>Login</button>
        </div>
        <LoginFacebook/>
      </div>
    </form>
  )
}
