import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import { CheckboxFilters } from "../actions/index";

const getVisibleProducts = (products, filter, text) => {
  let newProducts = [];
  if (products) {
    products.map(product => {
      if (product.name.indexOf(text) === -1) return;
      return newProducts.push(product);
    });
  }

  switch (filter) {
    case CheckboxFilters.CHECK_ALL:
      return newProducts;
    case CheckboxFilters.CHECK_STOCK_ONLY:
      return newProducts.filter(p => p.stocked);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  products: getVisibleProducts(
    state.products,
    state.checkboxFilter,
    state.searchProduct
  )
});

export default connect(mapStateToProps)(ProductList);
