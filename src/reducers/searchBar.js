const searchBar = (state = "", action) => {
  switch (action.type) {
    case "SEARCHBAR_PRODUCT":
      // return { ...state, searchProduct: action.text };
      return action.text;
    default:
      return state;
  }
};

export default searchBar;
