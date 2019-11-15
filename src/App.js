import React, { Component } from "react";
import products from "./components/product-item/product-item.component";

import data from "./data/data.json"; // fetch after

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="title">
        <h1> Vending Machine v1.0 </h1>
        <h2>number of product left : 58</h2>
        <products />
      </div>
    );
  }
}

export default App;
