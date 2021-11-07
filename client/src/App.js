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
import ErrorPage from "./components/views/ErrorPage/ErrorPage"
import BabiesPage from "./components/views/Category/BabiesPage";
import BeautyPage from "./components/views/Category/BeautyPage"
import BookPage from "./components/views/Category/BookPage"
import CarPage from "./components/views/Category/CarPage"
import ClothesPage from "./components/views/Category/ClothesPage"
import DigitalPage from "./components/views/Category/DigitalPage"
import FoodPage from "./components/views/Category/FoodPage"
import HealthPage from "./components/views/Category/HealthPage"
import HobbyPage from "./components/views/Category/HobbyPage"
import HomePage from "./components/views/Category/HomePage"
import KitchenPage from "./components/views/Category/KitchenPage"
import LivingPage from "./components/views/Category/LivingPage"
import OfficePage from "./components/views/Category/OfficePage"
import PetPage from "./components/views/Category/PetPage"
import SportsPage from "./components/views/Category/SportsPage"
import TravlePage from "./components/views/Category/TravlePage"

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
        <Route exact path="/product/babies" component={BabiesPage} />
        <Route exact path="/product/beauty" component={BeautyPage} />
        <Route exact path="/product/books" component={BookPage} />
        <Route exact path="/product/car" component={CarPage} />
        <Route exact path="/product/clothes" component={ClothesPage} />
        <Route exact path="/product/digital" component={DigitalPage} />
        <Route exact path="/product/foods" component={FoodPage} />
        <Route exact path="/product/health" component={HealthPage} />
        <Route exact path="/product/hobby" component={HobbyPage} />
        <Route exact path="/product/home" component={HomePage} />
        <Route exact path="/product/kitchen" component={KitchenPage} />
        <Route exact path="/product/living" component={LivingPage} />
        <Route exact path="/product/office" component={OfficePage} />
        <Route exact path="/product/pet" component={PetPage} />
        <Route exact path="/product/sports" component={SportsPage} />
        <Route exact path="/product/travel" component={TravlePage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
