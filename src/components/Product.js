import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price }) => (
    <tr>
        <td>{name}</td>
        <td>{price}</td>
    </tr>
)

Product.prototypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;