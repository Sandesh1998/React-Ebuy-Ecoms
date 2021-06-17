import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.components.jsx";
import Header from "./Components/header/header.componets.jsx";
import './App.css';



function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>

  );
}

export default App;