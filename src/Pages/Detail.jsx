import React from 'react'
import '../Assets/css/Detail.css'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { addItemToCartListAction, addItemToCartlistAction, getProductDetailApi, updateItemQuantityToCartListAction } from '../Redux/productReducer/productReducer';
import { ACCESSTOKEN, settings } from '../Ulti/Config';
import { forEach, get } from 'lodash';
import { useState } from 'react';


export default function Detail() {

  const { productDetail } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const [numberQuantity, setNumberQuantity] = useState(1)
  const { cartList } = useSelector(state => state.productReducer)

  const params = useParams()

  useEffect(() => {
    const action = getProductDetailApi(params.id)
    dispatch(action)
  }, [params.id])

  const renderRelatedProduct = () => {
    return productDetail?.relatedProducts?.map((item, index) => {
      return <div className="col-3" key={index}>
        <div className="card">
          <img src={item.image} alt="product-image" className='product-image' />
          <img src="/img/heart.png" alt="heart" className='heart' />
          <div className="card-body">
            <h1>{item.name}</h1>
            <p>{item.shortDescription}</p>
          </div>
          <div className="card-footer">
            <NavLink to={`/detail/${item.id}`} className='buy'>Buy now</NavLink>
            <NavLink className='price'>{item.price}$</NavLink>
          </div>
        </div>
      </div>
    })
  }

  const handleUpdateQuantity = (numberClick) => {
    if (numberQuantity + numberClick <= 0) {
      setNumberQuantity(1)
    } else {
      setNumberQuantity(numberQuantity + numberClick)
    }
  }

  const addToCart = () => {
    let itemCart = {
      id: productDetail.id,
      image: productDetail.image,
      name: productDetail.name,
      price: productDetail.price,
      quantity: numberQuantity,
      userToken: settings.getStore(ACCESSTOKEN),
      checked: false,
      
    }
    let checkItem = false;
    for (let i = 0; i < cartList.length; i++) {
      if (itemCart.id === cartList[i].id) {
        checkItem = true;
        const action = updateItemQuantityToCartListAction(itemCart);
        dispatch(action)
      }
    }
    if (!checkItem) {
      const action = addItemToCartListAction(itemCart);
      dispatch(action)
    }
  }


  return (
    <div className='container-fluid detail'>
      <div className="product-detail">
        <div className="row">
          <div className="col-4">
            <img src={productDetail.image} alt="detail_image" />
          </div>
          <div className="col-8">
            <h2>{productDetail.name}</h2>
            <p>{productDetail.description}</p>
            <h3>Available size</h3>
            <div className="size">
              {productDetail?.size?.map((item, index) => {
                return <button key={index}>{item}</button>
              })}
            </div>
            <h4>{productDetail.price}$</h4>
            <div className="quantity">
              <button onClick={() => { handleUpdateQuantity(1) }}>+</button>
              <span>
                {numberQuantity}
              </span>
              <button onClick={() => { handleUpdateQuantity(-1) }}>-</button>
            </div>
            <NavLink to={'/carts'} className='addToCart' onClick={addToCart}>Add to cart</NavLink>
          </div>
        </div>
      </div>
      <div className="relate-product">
        <h2>-Relate Product-</h2>
        <div className="product-list">
          <div className="row">
            {renderRelatedProduct()}
          </div>
        </div>
      </div>
    </div>
  )
}
