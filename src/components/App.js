import React from "react";
import ProductList from "./ProductList";
import SearchBar from "../containers/SearchBar";

const App = ({ products }) => (
  <div>
    <SearchBar />

    <ProductList products={products} />
  </div>
);

export default App;
