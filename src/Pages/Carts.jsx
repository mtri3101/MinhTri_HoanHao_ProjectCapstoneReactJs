import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Assets/css/Carts.css'
import { checkItemInCartListAction, deleteCartItemAction, handleQuantityItemAction, handleQuantityItemDecreaseAction, removeItemFromCartListAction, uncheckAllItemInCartListAction } from '../Redux/productReducer/productReducer'
import { getProfileApi, loginApi, SubmitOrderApi } from '../Redux/userReducer/userReducer'
import { http, settings } from '../Ulti/Config'

export default function Carts() {

  const { cartList } = useSelector(state => state.productReducer)
  const { submitOrder } = useSelector(state => state.userReducer)
  const { userProfile } = useSelector(state => state.userReducer)
  const { check } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()





  useEffect(() => {
    //request Login
    const actionAsync = getProfileApi();
    dispatch(actionAsync)

    const actionUncheck = uncheckAllItemInCartListAction();
    dispatch(actionUncheck)
  }, [])

  const checkedItem = (e, id) => {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === id) {
        const action = checkItemInCartListAction(cartList[i]);
        dispatch(action)
      }
    }
  }

  const deleteItem = (id) => {
    const action = deleteCartItemAction(id)
    console.log(action)
    dispatch(action)
  }

  const handleQuantityIncrease = (id) => {
    const action = handleQuantityItemAction(id)
    dispatch(action)
  }

  const handleQuantityDecrease = (id) => {
    const action = handleQuantityItemDecreaseAction(id)
    dispatch(action)
  }



  const renderCart = () => {
    if (cartList !== undefined) {
      return cartList.map((item, index) => {
        return <tr key={index}>
          <td><input type='checkbox' onChange={(e) => checkedItem(e, item.id)} checked={item.checked}></input></td>
          <td>{item.id}</td>
          <td><img src={item.image} alt="product-image" /></td>
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>
            <button className='quantity-button' onClick={() => handleQuantityIncrease(item.id)}>+</button>
            <span>{item.quantity}</span>
            <button className='quantity-button' onClick={() => handleQuantityDecrease(item.id)} disabled={check}>-</button>
          </td>
          <td>{(item.price * item.quantity).toLocaleString()}$</td>
          <td>
            <button className='action-button edit'>EDIT</button>
            <button className='action-button delete' onClick={() => deleteItem(item.id)}>DELETE</button>
          </td>
        </tr>
      })
    }
  }

  const handleSubmitOrder = () => {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].checked) {
        let order = {
          "orderDetail": [
            {
              "productId": cartList[i].id,
              "quantity": cartList[i].quantity
            }
          ],
          "email": userProfile.email
        }
        const action = SubmitOrderApi(order)
        dispatch(action)
        const actionRemove = removeItemFromCartListAction(cartList[i])
        dispatch(actionRemove)
      }
    }

  }

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
          {renderCart()}
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
            <td><button onClick={handleSubmitOrder}>SUBMIT ORDER</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
