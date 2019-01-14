import React from "react";
import VisibleProductList from "../containers/VisibleProductList";
import Header from "./Header";

const App = ({ products }) => (
  <div>
    <Header />
    <VisibleProductList products={products} />
  </div>
);

export default App;
