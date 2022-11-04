import React from 'react'
import "../Assets/scss/Profile.scss"
export default function Profile() {
  return (
    <div className='container'>
      <h3 className='profile d-flex justify-content-left'>Profile</h3>
      <div className='row'>
        <div className='col-2'>
          <img src="https://i.pravatar.cc" style={{ height: 180, borderRadius: 100 }} alt="..." className="w-100" />
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-6 left'>
              <div className='form-group email'>
                <p>Email</p>
                <input className='form-control' name={"email"} />
              </div>
              <div className='form-group phone'>
                <p>Phone</p>
                <input className='form-control' name={"phone"} />
              </div>
            </div>
            <div className='col-6 right'>
              <div className='form-group name'>
                <p>Name</p>
                <input className='form-control' name={"name"} />
              </div>
              <div className='form-group password'>
                <p>Password</p>
                <input className='form-control' name={"password"} type="password"/>
              </div>
              <div className='form-group gender'>
                <span className='mx-4'>Gender</span>
                <input className='mx-2' type="radio" id='male' name='male' value={true} />
                <label for="male">Male</label>
                <input className='mx-2' type="radio" id='female' name='female' value={false} />
                <label for="female">Female</label>
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

    </div>
  )
}
