import React, { Component } from "react";
import sidebar from "./components/sidebar/sidebar.component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <container>
        <div className="header">
          <h1> Vending Machine v1.0 </h1>
        </div>

        <div className="product1">
          <h1> Product 1 </h1>
          <h1> Product 2 </h1>
          <h1> Product 3 </h1>
        </div>

        <div className="product2">
          <h1> Product 4 </h1>
          <h1> Product 5 </h1>
          <h1> Product 6 </h1>
        </div>

        <div className="product3">
          <h1> Product 7 </h1>
          <h1> Product 8 </h1>
          <h1> Product 9 </h1>
        </div>
      </container>
    );
  }
}

export default App;
