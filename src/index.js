import React  from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import Index from './Pages/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Register';
import Carts from './Pages/Register';
import Search from './Pages/Register';
import HomeTemplate from './Templates/HomeTemplate';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider>
    <Routes>
        <Route path="" element={<HomeTemplate/>}>
          <Route index element={<Index/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="carts" element={<Carts/>}></Route>
          <Route path="search" element={<Search/>}></Route>
        </Route>
    </Routes>
 </Provider>
);

