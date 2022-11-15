import React from 'react'
import "../Assets/scss/Register.scss"
import {  useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { getRegisterApi, RegisterAction } from '../Redux/userReducer/userReducer'
import { useEffect } from 'react'
export default function Register() {
  const { userRegister } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: '',
      phone: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Vui lòng nhập vào email !').email('Email không đúng định dạng !'),
      password: yup.string().required('Vui lòng nhập vào password !').min(6, 'Password từ 6 - 20 ký tự !').max(20, 'Password từ 6 - 20 ký tự !'),
      passwordConfirm: yup.string().required('Vui lòng nhập vào password !').oneOf([yup.ref('password'), null], 'Password không trùng khớp !').min(6, 'Password từ 6 - 20 ký tự !').max(20, 'Password từ 6 - 20 ký tự !'),
      phone: yup.number().required('Vui lòng nhập vào phone !').typeError('Phone phải là số !'),
      name: yup.string().required('Vui lòng nhập vào name !'),
      gender: yup.boolean().required('Vui lòng chọn gender !'),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = getRegisterApi(values);
      dispatch(action);
    }
  });



  return (
    <form className='form-group' onSubmit={frm.handleSubmit}>
      <h3>Register</h3>
      <div className='container'>
        <div className='row'>
          <div className='col-6 left'>
            <div className='form-group email'>
              <p>Email</p>
              <input type="text" placeholder='Email' name={"email"} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              {frm.errors.email ? <p className='text text-danger'>{frm.errors.email}</p> : ''}
            </div>
            <div className='form-group password'>
              <p>Password</p>
              <input type="password" placeholder='Password' name={"password"} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              {frm.errors.password ? <p className='text text-danger'>{frm.errors.password}</p> : ''}
            </div>
            <div className='form-group passwordconfirm'>
              <p>Password Confirm</p>
              <input type="password" placeholder='Password confirm' name={"passwordConfirm"} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              {frm.errors.passwordConfirm ? <p className='text text-danger'>{frm.errors.passwordConfirm}</p> : ''}
            </div>
          </div>
          <div className='col-6 right'>
            <div className='form-group name'>
              <p>Name</p>
              <input type="text" placeholder='Name' name={"name"} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              {frm.errors.name ? <p className='text text-danger'>{frm.errors.name}</p> : ''}
            </div>
            <div className='form-group phone'>
              <p>Phone</p>
              <input type="text" placeholder='Phone' name={"phone"} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              {frm.errors.phone ? <p className='text text-danger'>{frm.errors.phone}</p> : ''}
            </div>
            <div className='form-group gender'>
              <span>Gender</span>
              <input className='mx-2' type="radio" name="gender" id="male" value={true} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              <label htmlFor="male">Male</label>
              <input className='mx-2' type="radio" name="gender" id="female" value={false} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
              <label htmlFor="female">Female</label>
              {frm.errors.gender ? <p className='text text-danger'>{frm.errors.gender}</p> : ''}
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}
