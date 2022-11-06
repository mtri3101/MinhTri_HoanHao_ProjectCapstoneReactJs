import React from 'react'
import '../Assets/css/Detail.css'
import {NavLink} from 'react-router-dom'

export default function Detail() {
  return (
    <div className='container-fluid detail'>
      <div className="product-detail">
        <div className="row">
          <div className="col-4">
            <img src="img/detail_image.png" alt="detail_image" />
          </div>
          <div className="col-8">
            <h2>Product name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos ea debitis ex fugiat dignissimos officiis sed in officia commodi!</p>
            <h3>Available size</h3>
            <div className="size">
              <button>38</button>
              <button>39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
            </div>
            <h4>85$</h4>
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
