import { createSlice } from '@reduxjs/toolkit'
import { http, settings } from '../../Ulti/Config';

const initialState = {
    arrProduct: [],
    productDetail: [],
    searchProduct: [],
    category: [],
    cartList: settings.getStorageJson('cart') || [],
    check: false
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductAction: (state, action) => {
            state.arrProduct = action.payload
        },
        getProductDetailAction: (state, action) => {
            state.productDetail = action.payload
        },
        searchProductAction: (state, action) => {
            state.searchProduct = action.payload
        },
        getAllCategoryAction: (state, action) => {
            state.category = action.payload
        },
        addItemToCartListAction: (state, action) => {
            state.cartList.push(action.payload)
            settings.setStorageJson('cart', state.cartList)
        },
        removeItemFromCartListAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.payload.id) {
                    state.cartList.splice(i, 1)
                    break
                }
            }
            settings.setStorageJson('cart', state.cartList)
        },
        updateItemQuantityToCartListAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.payload.id) {
                    state.cartList[i].quantity += action.payload.quantity;
                    break
                }
            }
            settings.setStorageJson('cart', state.cartList)
        },
        checkItemInCartListAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.payload.id) {
                    state.cartList[i].checked = !state.cartList[i].checked;
                    break
                }
            }
            settings.setStorageJson('cart', state.cartList)
        },
        uncheckAllItemInCartListAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                state.cartList[i].checked = false;
            }
            settings.setStorageJson('cart', state.cartList)
        },
        deleteCartItemAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.payload) {
                    state.cartList.splice(i, 1)
                }
            }
        },
        handleQuantityItemAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.payload) {
                    state.cartList[i].quantity++
                }
            }
        },
        handleQuantityItemDecreaseAction: (state, action) => {
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.payload) {
                    if (state.cartList[i].quantity >= 1) {
                        state.check = false
                        state.cartList[i].quantity--
                    }
                }
            }
        }

    }
});

export const { getProductAction, getProductDetailAction, searchProductAction, getAllCategoryAction, addItemToCartListAction, updateItemQuantityToCartListAction, checkItemInCartListAction, uncheckAllItemInCartListAction, removeItemFromCartListAction, deleteCartItemAction, handleQuantityItemAction, handleQuantityItemDecreaseAction } = productReducer.actions

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

export const getProductDetailApi = (id) => {
    return async dispatch => {
        let result = await http.get('api/Product/getbyid?id=' + id);
        let prodDetail = result.data.content;
        const action = getProductDetailAction(prodDetail);
        dispatch(action)
    }
}

export const searchProductApi = (keyword) => {
    return async dispatch => {
        let result = await http.get('api/Product?keyword=' + keyword)
        let prodSearch = result.data.content
        const action = searchProductAction(prodSearch);
        dispatch(action)
    }
}

export const getAllCategoryApi = () => {
    return async dispatch => {
        let result = await http.get('api/Product/getAllCategory')
        let category = result.data.content;
        const action = getAllCategoryAction(category)
        dispatch(action)
    }
}

