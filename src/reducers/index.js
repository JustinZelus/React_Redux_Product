import { combineReducers } from "redux";
import checkboxFilter from "./checkboxFilter";
import searchProduct from "./searchBar";
import products from "./products";

export default combineReducers({
  products,
  checkboxFilter,
  searchProduct
});

// import { CheckboxFilters } from "../actions/index";

// const initialState = {
//   checkboxFilter: CheckboxFilters.CHECK_ALL,
//   searchbar: "",
//   products: []
// };

// function productApp(state = initialState, action) {
//   switch (action.type) {
//     case "SET_CHECK_BOX":
//       return Object.assign({}, state, { CheckboxFilter: action.isStockOnly });
//     case "SEARCHING_PRODUCT":
//       return Object.assign({}, state, { searchbar: action.text });

//     default:
//       return state;
//   }

//   return state;
// }
