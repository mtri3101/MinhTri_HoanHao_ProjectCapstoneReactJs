import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "../Assets/scss/Profile.scss"
import { getProfileApi,getProfileUpdateApi } from '../Redux/userReducer/userReducer';
import {Formik, useFormik} from 'formik'
import * as yup from 'yup'
export default function Profile() {
  const {userProfile} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
    
    const actionAsync = getProfileApi();
    dispatch(actionAsync);

    // async function setIntervalValues(){
    //   if(frm.values.email) await frm.setValues(userProfile.email);
    // }
    // setIntervalValues();
    
  },[]);

  const frm = useFormik({
    initialValues:{
      email:'',
      phone:'',
      name:'',
      password:'',
      gender:''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Vui lòng nhập vào email !').email('Email không đúng định dạng !'),
      phone: yup.number().required('Vui lòng nhập vào phone !').typeError('Phone phải là số !'),
      name: yup.string().required('Vui lòng nhập vào name !'),
      password: yup.string().required('Vui lòng nhập vào password !').min(6, 'Password từ 6 - 20 ký tự !').max(20, 'Password từ 6 - 20 ký tự !'),
      gender: yup.boolean().required('Vui lòng chọn gender !'),
    }),
    onSubmit: (values) =>{
      console.log(values)
      // const action = getProfileUpdateApi(values);
      // dispatch(action);
    }
  });
  
  return (
    <form className='container' onSubmit={frm.handleSubmit}>
      <h3 className='profile d-flex justify-content-left'>Profile</h3>
      <div className='row'>
        <div className='col-2'>
          <img src={userProfile.avatar} style={{ height: 180, borderRadius: 100 }} alt="..." className="w-100" />
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-6 left'>
              <div className='form-group email'>
                <p>Email</p>
                <input className='form-control' name={"email"} defaultValue={userProfile.email} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                {frm.errors.email ? <p className='text text-danger'>{frm.errors.email}</p> : ''}
              </div>
              <div className='form-group phone'>
                <p className='mb-0'>Phone</p>
                <input className='form-control' name={"phone"} defaultValue={userProfile.phone} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                {frm.errors.phone ? <p className='text text-danger'>{frm.errors.phone}</p> : ''}
              </div>
            </div>
            <div className='col-6 right'>
              <div className='form-group name'>
                <p>Name</p>
                <input className='form-control' name={"name"} defaultValue={userProfile.name} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                {frm.errors.name ? <p className='text text-danger'>{frm.errors.name}</p> : ''}
              </div>
              <div className='form-group password'>
                <p className='mb-0'>Password</p>
                <input className='form-control' name={"password"} type="password" defaultValue={userProfile.password} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                {frm.errors.password ? <p className='text text-danger'>{frm.errors.password}</p> : ''}
              </div>
              <div className='form-group gender'>
                <span className='me-4'>Gender</span>
                <input className='mx-2' type="radio" id='male' name='gender' defaultValue={true} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                <label for="male">Male</label>
                <input className='mx-2' type="radio" id='female' name='gender' defaultValue={false} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                <label for="female">Female</label>
                {frm.errors.gender ? <p className='text text-danger'>{frm.errors.gender}</p> : ''}
                <button className='btn btn-primary ms-5'>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='history'>Order History</span>
      <span className='favorite'>Favorite</span>
      <p className='history-order'>+ Orders have been placed on 09 - 19 - 2020</p>
      <table className='table'>
        <thead>
          <tr className='text-center'>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quanlity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tr className='text-center'>
          <td>1</td>
          <td><img src="https://i.pravatar.cc" style={{ height: "80px" }} alt="" /></td>
          <td>Nike</td>
          <td>1000</td>
          <td>1</td>
          <td>1000</td>
        </tr>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </form>
  )
}
