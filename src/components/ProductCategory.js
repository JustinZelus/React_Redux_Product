import React from 'react';
import PropTypes from 'prop-types';

const ProductCategory = ({ category }) => (
    <tr>
        <th>{category}</th>
    </tr>
)

ProductCategory.prototypes = {
    category: PropTypes.string.isRequired
}

export default ProductCategory;