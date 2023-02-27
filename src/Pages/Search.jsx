import React from 'react'
import '../Assets/scss/Search.scss'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCategoryApi, searchProductApi } from '../Redux/productReducer/productReducer'
import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import sortBy from "lodash/sortBy"
import { orderBy } from 'lodash'

export default function Search() {

  const { searchProduct } = useSelector(state => state.productReducer)
  const { category } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()

  const keywordRef = useRef('');

  const [searchParams, setSearchParams] = useSearchParams()

  const [sortProduct, setSortProduct] = useState()




  useEffect(() => {
    setSortProduct(searchProduct);
  }, [searchProduct])

  useEffect(() => {
    const keyword = searchParams.get('keyword')
    const action = searchProductApi(keyword);
    dispatch(action)
  }, [keywordRef.current])

  useEffect(() => {
    const action = getAllCategoryApi();
    dispatch(action);
  }, [])


  const renderProductList = () => {
    //chưa click vào sort
    if (sortProduct === undefined) {
      return searchProduct.map((prod, index) => {
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
    } else {
      return sortProduct.map((prod, index) => {
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
  }

  const handleChange = (e) => {
    let { value } = e.target;
    keywordRef.current = value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      keyword: keywordRef.current
    })
  }

  const handleSort = (e) => {
    if (e.target.id == "decrease") {
      let sortItem = orderBy(searchProduct, ['price'], ['desc']);
      setSortProduct(sortItem)
      renderProductList();
    }
    else {
      let sortItem = orderBy(searchProduct, ['price'], ['asc']);
      setSortProduct(sortItem)
      renderProductList();
    }
  }


  // const renderCategory = () => {
  //   return category.filter(item => item.categoryChild !== '[]').map((cate, index) => {
  //     return <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" key={index}>
  //       <li><a class="dropdown-item" href="#">{cate.id}</a></li>
  //     </ul>
  //   })
  // }

  // const renderChildCategory = () => {
  //   return category.filter(item => item.categoryParent !== '[]').map((cate, index) => {
  //     return <option value={cate.id} className='cate-parent' key={index} label={cate.category} ></option>
  //   })
  // }



  return (
    <div className='container-fluid'>
      <div className="search-bar ">
        <form className="form-group" onSubmit={handleSubmit}>
          <p>Search</p>
          <input type="text" placeholder='Search product name' onChange={handleChange} />
          <button type='submit'>SEARCH</button>
        </form>
      </div>
      <div className="search-result">
        <div className='title'>
          <h2>Search result</h2>
        </div>
        <div className="sort">
          <p>Price</p>
          <button id='decrease' onClick={handleSort} >
            <span>Decrease</span>
            <div id='decrease' className="arrow-down"></div>
          </button>
          <button id='ascending' onClick={handleSort}>Ascending</button>
        </div>
        <div className="result">
          <div className="row">
            {renderProductList()}
          </div>
        </div>
      </div>
    </div>
  )
}
