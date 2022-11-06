import axios from 'axios';
export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';
export const TOKEN_CYBERSOFT = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJoYW90cmluaEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJWSUVXX1BST0ZJTEUiLCJuYmYiOjE2Njc1NTQ3NDcsImV4cCI6MTY2NzU1ODM0N30._oUPJhC6ail-T3S3Rzg-rKzDcCF5YUVvligRNb41YfM'
export const http = axios.create({
    baseURL: 'https://shop.cyberlearn.vn',
    timeout: 30000
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: TOKEN_CYBERSOFT,
        // Authorization: 'Bear' + settings.getStore(ACCESSTOKEN)
    }
    return config;

}, err => {
    console.log(err);
    return Promise.reject(err);
})



