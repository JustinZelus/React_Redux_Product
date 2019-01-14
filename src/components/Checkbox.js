import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ checked, children, onChange }) => (
  <p>
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(checked)}
    />
    {""}
    {children}
  </p>
);

Checkbox.prototypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
