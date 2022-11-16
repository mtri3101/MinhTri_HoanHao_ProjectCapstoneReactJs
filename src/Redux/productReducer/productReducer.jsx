import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../Ulti/Config';

const initialState = {
    arrProduct: [],
    productDetail: [],
    searchProduct: []
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductAction: (state, action) => {
            state.arrProduct = action.payload
        },
        getProductDetailAction: (state,action) =>{
            state.productDetail = action.payload
        },
        searchProductAction: (state,action) =>{
            state.searchProduct = action.payload
        }
    }
});

export const { getProductAction,getProductDetailAction,searchProductAction } = productReducer.actions

export default productReducer.reducer

//------------------action async----------------------
export const getProductApi = () => {
    return async dispatch => {
        let result = await http.get('api/Product');
        let prodList = result.data.content
        const action = getProductAction(prodList);
        dispatch(action)
    }
}

export const getProductDetailApi = (id) =>{
    return async dispatch =>{
        let result = await http.get('api/Product/getbyid?id=' + id);
        let prodDetail = result.data.content;
        const action = getProductDetailAction(prodDetail);
        dispatch(action)
    }
}

export const searchProductApi = (keyword) =>{
    return async dispatch =>{
        let result = await http.get('api/Product?keyword=' + keyword)
        let prodSearch = result.data.content
        const action = searchProductAction(prodSearch);
        dispatch(action)
    }
}

