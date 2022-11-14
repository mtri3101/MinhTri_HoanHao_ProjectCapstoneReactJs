import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/configStore";
import { Routes, Route, BrowserRouter,unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Carts from "./Pages/Carts";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import HomeTemplate from "./Templates/HomeTemplate";
import {createBrowserHistory} from 'history'
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Index />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="carts" element={<Carts />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="detail" element={<Detail />}></Route>
          </Route>
        </Routes>
    </HistoryRouter>
  </Provider>
);
