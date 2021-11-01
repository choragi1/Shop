/*eslint-disable*/

import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/views/NavBar/NavBar";
import MainPage from "./components/views/MainPage/MainPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import DetailPage from "./components/views/DetailPage/DetailPage";
import Footer from "./components/views/Footer/Footer";
import Data from "./Data/Data";
import UploadProductPage from "./components/views/UploadProductPage/UploadProductPage";
import CartPage from "./components/views/CartPage/CartPage";


function App() {
  let [shoes, setShoes] = useState(Data);
  let [Stock, setStock] = useState([10,11,12])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage shoes={shoes} setShoes={setShoes} />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/detail/:id">
          <DetailPage shoes={shoes} setShoes={setShoes} />
        </Route>
        <Route exact path="/product/upload" component={UploadProductPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
