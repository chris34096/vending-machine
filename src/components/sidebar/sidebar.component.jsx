import React, { Component } from "react";
import productList from "../product-list/productList.component";
import productItem from "../product-item/productItem.component";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <h1>side bar</h1>
        <productList />
        <productItem />
      </div>
    );
  }
}

export default Sidebar;
