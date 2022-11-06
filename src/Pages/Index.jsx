import React from 'react'
import '../Assets/css/Index.css'
import { NavLink } from 'react-router-dom'

export default function Index() {
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
            <div className="col-3">
              <div className="card">
                <img src="img/image_5.png" alt="product-image" className='product-image' />
                <img src="img/heart.png" alt="heart" className='heart' />
                <div className="card-body">
                  <h1>Adidas Prophere</h1>
                  <p>Short descript...</p>
                </div>
                <div className="card-footer">
                  <NavLink className='buy'>Buy now</NavLink>
                  <NavLink className='price'>85$</NavLink>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="img/image_5.png" alt="product-image" className='product-image' />
                <img src="img/heart.png" alt="heart" className='heart' />
                <div className="card-body">
                  <h1>Adidas Prophere</h1>
                  <p>Short descript...</p>
                </div>
                <div className="card-footer">
                  <NavLink className='buy'>Buy now</NavLink>
                  <NavLink className='price'>85$</NavLink>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="img/image_5.png" alt="product-image" className='product-image' />
                <img src="img/heart.png" alt="heart" className='heart' />
                <div className="card-body">
                  <h1>Adidas Prophere</h1>
                  <p>Short descript...</p>
                </div>
                <div className="card-footer">
                  <NavLink className='buy'>Buy now</NavLink>
                  <NavLink className='price'>85$</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
