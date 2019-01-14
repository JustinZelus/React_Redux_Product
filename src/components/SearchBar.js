import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search..."
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

SearchBar.prototypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
