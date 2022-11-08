import React from 'react'
import '../Assets/css/Carts.css'

export default function Carts() {
  return (
    <div className='container-fluid carts'>
      <h2>Carts</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th><input type='checkbox'></input></th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th className='quantity'>quantity</th>
            <th>total</th>
            <th className='action'>action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='checkbox'></input></td>
            <td>1</td>
            <td><img src="img/image_5.png" alt="product-image" /></td>
            <td>Product 1</td>
            <td>1000</td>
            <td>
              <button className='quantity-button'>+</button>
              <span>1</span>
              <button className='quantity-button'>-</button>
            </td>
            <td>1000</td>
            <td>
              <button className='action-button edit'>EDIT</button>
              <button className='action-button delete'>DELETE</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button>SUBMIT ORDER</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
