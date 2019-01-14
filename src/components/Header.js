import React from "react";
import ProTypes from "prop-types";
import SearchBarContainer from "../containers/SearchBarContainer";

import FilterCheckbox from "../containers/FilterCheckbox";
const Header = () => (
  <form>
    <SearchBarContainer />
    <FilterCheckbox>Only show products in stock</FilterCheckbox>
  </form>
);

export default Header;
