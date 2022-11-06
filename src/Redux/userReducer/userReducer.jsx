import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, settings, USER_LOGIN } from '../../Ulti/Config';

const initialState = {
    userLogin: {
     
    },

}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state,action) =>{
      const userLogin = action.payload;
      state.userLogin = userLogin;
    }
  }
});

export const {loginAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin) =>{
  return async dispatch =>{
    const result = await http.post('/api/users/signin', userLogin);
    const action = loginAction(result.data.content);
    dispatch(action);
  }
}