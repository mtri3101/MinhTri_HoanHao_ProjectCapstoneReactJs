import React from 'react'
import '../Assets/css/Detail.css'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getProductDetailApi } from '../Redux/productReducer/productReducer';


export default function Detail() {

  const { productDetail } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  const params = useParams()

  useEffect(() => {
    const action = getProductDetailApi(params.id)
    dispatch(action)
  }, [params.id])

  const renderRelatedProduct = () => {
    return productDetail?.relatedProducts?.map((item,index) =>{
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
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <button className='addToCart'>Add to cart</button>
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
