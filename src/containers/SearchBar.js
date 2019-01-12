import React from 'react';
import ProTypes from 'prop-types';
import Checkbox from '../components/Checkbox';

// const SearchBar = () => (
//     <form>
//         <input type="text" placeholder="Search..." />

//     </form>
// )

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
          </p>
            </form>
        );
    }
}

export default SearchBar;

