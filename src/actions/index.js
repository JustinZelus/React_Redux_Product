/*
 * action types
 */
export const SEARCHBAR_PRODUCT = "SEARCHBAR_PRODUCT";
export const SET_CHECK_BOX = "SET_CHECK_BOX";

//???好像用不到
export const CHECK_STOCK_ONLY = "CHECK_STOCK_ONLY";
export const CHECK_ALL = "CHECK_ALL";

/*
 * action creators
 */
export const setSearchBarProduct = text => ({
  type: SEARCHBAR_PRODUCT,
  text
});

export const setCheckbox = filter => ({
  type: SET_CHECK_BOX,
  filter
});

//???好像用不到
export const CheckboxFilters = {
  CHECK_ALL: "CHECK_ALL",
  CHECK_STOCK_ONLY: "CHECK_STOCK_ONLY"
};
