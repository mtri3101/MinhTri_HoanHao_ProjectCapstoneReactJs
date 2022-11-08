import React from 'react'
import '../Assets/css/Search.css'
import { NavLink } from 'react-router-dom'

export default function Search() {
  return (
    <div className='container-fluid'>
      <div className="search-bar ">
        <div className="form-group">
          <p>Search</p>
          <input type="text" placeholder='Search product name' />
          <button>SEARCH</button>
        </div>
      </div>
      <div className="search-result">
        <div className='title'>
          <h2>Search result</h2>
        </div>
        <div className="sort">
          <p>Price</p>
          <button id='decrease'>Decrease
            <div className="arrow-down">
            </div></button>
          <button id='ascending'>Ascending</button>
        </div>
        <div className="result">
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
