import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESSTOKEN, http, settings, USER_LOGIN, USER_REGISTER } from '../../Ulti/Config';

const initialState = {
  userLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : {},
  userProfile: {

  },
  userProfileUpdate: {

  },
  userRegister: settings.getStorageJson(USER_REGISTER) ? settings.getStorageJson(USER_REGISTER) : {}
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state,action) =>{
      const userLogin = action.payload;
      state.userLogin = userLogin;
    },
    getProfileAction: (state,action) =>{
      state.userProfile = action.payload;
    },
    getProfileUpdateAction: (state,action) =>{
      state.userProfileUpdate = action.payload;
    },
    RegisterAction: (state,action) =>{
      state.userRegister = action.payload;
    }
  }
});

export const {loginAction,getProfileAction,getProfileUpdateAction,RegisterAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin) =>{
  return async dispatch =>{
    const result = await http.post('/api/users/signin', userLogin);
    const action = loginAction(result.data.content);
    await dispatch(action);
    const actionGetProfile = getProfileApi();
    dispatch(actionGetProfile);

    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  }
}

export const getProfileApi = () =>{
  return async dispatch =>{
    const result = await http.post('/api/users/getprofile');
    const action = getProfileAction(result.data.content);
    dispatch(action);
  }
}

export const getProfileUpdateApi = (userProfileUpdate) =>{
  return async dispatch =>{
    const result = await http.post('/api/Users/updateProfile', userProfileUpdate);
    const action = getProfileUpdateAction(result.data.content);
    dispatch(action);
  }
}

export const getRegisterApi = (userRegister) =>{
  return async dispatch =>{
    const result = await http.post('/api/Users/signup', userRegister);
    const action = RegisterAction(result.data.content);
    await dispatch(action);

    settings.setStorageJson(USER_REGISTER, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  }
}

export const LoginFacebookApi = (tokenFBApp) =>{
  return async dispatch =>{
    const result = await http.post('/api/users/facebooklogin', {facebookToken: tokenFBApp});
    const action = loginAction(result.data.content);
    await dispatch(action);
    
    const actionGetProfile = getProfileApi();
    dispatch(actionGetProfile);

    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  }
}