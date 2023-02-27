import React from 'react'
import '../Assets/scss/Index.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductApi } from '../Redux/productReducer/productReducer'

export default function Index() {

  const { arrProduct } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const action = getProductApi();
    dispatch(action)
  }, [])

  const renderProductList = () => {
    return arrProduct.map((prod,index) => {
      return <div className="col-3" key={index}>
      <div className="card">
        <img src={prod.image} alt="product-image" className='product-image' />
        <img src="img/heart.png" alt="heart" className='heart' />
        <div className="card-body">
          <h1>{prod.name}</h1>
          <p>{prod.shortDescription}</p>
        </div>
        <div className="card-footer">
          <NavLink to={`/detail/${prod.id}`} className='buy'>Buy now</NavLink>
          <NavLink className='price'>{prod.price}$</NavLink>
        </div>
      </div>
    </div>
    })
  }

  return (
    <div className='container-fluid'>
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" aria-current="true" aria-label="First slide" />
          <li data-bs-target="#carouselId" data-bs-slide-to={1} aria-label="Second slide" />
          <li data-bs-target="#carouselId" data-bs-slide-to={2} aria-label="Third slide" />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="img/carousel_image.png" alt="First slide" />
            <div className='content'>
              <h1>Product name</h1>
              <p>Product description</p>
              <button><a>Buy now</a></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/carousel_image.png" alt="Second slide" />
            <div className='content'>
              <h1>Product name</h1>
              <p>Product description</p>
              <button><a>Buy now</a></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/carousel_image.png" alt="Third slide" />
            <div className='content'>
              <h1>Product name</h1>
              <p>Product description</p>
              <button><a>Buy now</a></button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <img src="img/Polygon_2.png" alt="PreviousButton" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <img src="img/Polygon_1.png" alt="PreviousButton" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='product'>
        <div className='productFeature'>
          <h2>Product Feature</h2>
        </div>
        <div className="product-list">
          <div className="row">
            {renderProductList()}
          </div>
        </div>
      </div>
    </div>
  )
}
