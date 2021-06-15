import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage.component";
import './App.css';

const HatPage = () => (
  <div>
    <h1>HatPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact={true} path='/' component={HomePage} />
      <Route path='/hats' component={HatPage} />
    </div>

  );
}

export default App;
