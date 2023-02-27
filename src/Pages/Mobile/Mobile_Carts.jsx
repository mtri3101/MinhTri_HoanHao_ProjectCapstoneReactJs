import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../Assets/scss/Mobile_Carts.scss'
import { checkItemInCartListAction, deleteCartItemAction, handleQuantityItemAction, handleQuantityItemDecreaseAction, removeItemFromCartListAction, uncheckAllItemInCartListAction } from '../../Redux/productReducer/productReducer'
import { getProfileApi, loginApi, SubmitOrderApi } from '../../Redux/userReducer/userReducer'
import { http, settings } from '../../Ulti/Config'

export default function Mobile_Carts() {
    const { cartList } = useSelector(state => state.productReducer)
    const { submitOrder } = useSelector(state => state.userReducer)
    const { userProfile } = useSelector(state => state.userReducer)
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
                return <div className='row mb-5' key={index}>
                    <div className="col-1">
                        <input type='checkbox' onChange={(e) => checkedItem(e, item.id)} checked={item.checked}></input>
                    </div>
                    <div className="col-4 firstCol">
                        <img src={item.image}></img>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-6 secondCol">
                                <h2>{item.price}$</h2>
                                <div className='quantity'>
                                    <button className='quantity-button' onClick={() => handleQuantityIncrease(item.id)}>+</button>
                                    <span>{item.quantity}</span>
                                    <button className='quantity-button' onClick={() => handleQuantityDecrease(item.id)}>-</button>
                                </div>
                                <p>Total: {(item.price * item.quantity).toLocaleString()}$</p>
                            </div>
                            <div className="col-6 thirdCol">
                                <button className='edit'>Edit</button>
                                <button className='delete' onClick={() => deleteItem(item.id)}>Delete</button>
                                <br />
                                <button className='order' onClick={handleSubmitOrder}>Submit order</button>
                            </div>
                        </div>
                    </div>
                    <h1>{item.name}</h1>
                    <hr />
                </div>
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
            <h2 className='title'>Carts</h2>
            <hr />
            {renderCart()}
        </div>
    )
}
