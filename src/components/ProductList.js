import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import ProductCategory from "./ProductCategory";

const ProductList = ({ products }) => {
  let lastCategory = null;
  let row = [];

  if (products) {
    products.map(product => {
      if (product.category !== lastCategory) {
        row.push(
          <ProductCategory category={product.category} key={product.category} />
        );
      }
      row.push(<Product key={product.id} {...product} />);
      lastCategory = product.category;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
};

ProductList.prototypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      inStockOnly: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default ProductList;
