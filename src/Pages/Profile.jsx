import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "../Assets/scss/Profile.scss"
import { getProfileApi, getProfileUpdateApi } from '../Redux/userReducer/userReducer';
import { useFormik } from 'formik'
import * as yup from 'yup'
export default function Profile() {
  const { userProfile } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {

    const actionAsync = getProfileApi();
    dispatch(actionAsync);

  }, []);

  useEffect(() => {
    if (Object.keys(userProfile).length !== 0) {
      Object.keys(frm.initialValues).forEach((item) => {
        frm.setFieldValue(item, userProfile[item])
      })
    }
  }, [userProfile])

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
      phone: yup.number().required('Vui lòng nhập vào phone !').typeError('Phone phải là số !'),
      name: yup.string().required('Vui lòng nhập vào name !'),
      password: yup.string().required('Vui lòng nhập vào password !').min(6, 'Password từ 6 - 20 ký tự !').max(20, 'Password từ 6 - 20 ký tự !'),
      gender: yup.boolean().required('Vui lòng chọn gender !'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values)
      const action = getProfileUpdateApi(values);
      dispatch(action);
    }
  });

  const orderHistory = () =>{
    return userProfile.ordersHistory?.map((item,index)=>{
      return <>
      <p className='history-order' key={index}>+ Orders have been placed on {item.date}</p>
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
        <tbody>
      <tr className='text-center'>
      <td>{item.id}</td>
      <td><img src={item.orderDetail[0].image} style={{ height: "50px", objectFit: "cover" }} alt="" /></td>
      <td>{item.orderDetail[0].name}</td>
      <td>{item.orderDetail[0].price}$</td>
      <td>{item.orderDetail[0].quantity}</td>
      <td>{(item.orderDetail[0].price * item.orderDetail[0].quantity).toLocaleString()}$</td>
    </tr>
    </tbody>
    </table>
    </>
    })
  }

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
                <input className='form-control' name={"email"} value={frm.values.email} onChange={frm.handleChange} onBlur={frm.handleBlur} />
                {frm.errors.email ? <p className='text text-danger'>{frm.errors.email}</p> : ''}
              </div>
              <div className='form-group phone'>
                <p className='mb-0'>Phone</p>
                <input className='form-control' name={"phone"} value={frm.values.phone} onChange={frm.handleChange} onBlur={frm.handleBlur} />
                {frm.errors.phone ? <p className='text text-danger'>{frm.errors.phone}</p> : ''}
              </div>
            </div>
            <div className='col-6 right'>
              <div className='form-group name'>
                <p>Name</p>
                <input className='form-control' name={"name"} value={frm.values.name} onChange={frm.handleChange} onBlur={frm.handleBlur} />
                {frm.errors.name ? <p className='text text-danger'>{frm.errors.name}</p> : ''}
              </div>
              <div className='form-group password'>
                <p className='mb-0'>Password</p>
                <input className='form-control' name={"password"} type="password" value={frm.values.password} onChange={frm.handleChange} onBlur={frm.handleBlur} />
                {frm.errors.password ? <p className='text text-danger'>{frm.errors.password}</p> : ''}
              </div>
              <div className='form-group gender'>
                <span className='me-4'>Gender</span>
                <input className='mx-2' type="radio" id='male' name={'gender'} value='1' checked={frm.values.gender === '1'} onChange={frm.handleChange} onBlur={frm.handleBlur} />
                <label htmlFor="male">Male</label>
                <input className='mx-2' type="radio" id='female' name={'gender'} value='0' checked={frm.values.gender === '0'} onChange={frm.handleChange} onBlur={frm.handleBlur} />
                <label htmlFor="female">Female</label>
                {frm.errors.gender ? <p className='text text-danger'>{frm.errors.gender}</p> : ''}
                <button type='submit' className='btn btn-primary ms-5'>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='history'>Order History</span>
      <span className='favorite'>Favorite</span>
          {orderHistory()}
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
