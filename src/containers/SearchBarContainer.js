import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { setSearchBarProduct } from "../actions/index";

const mapStateToProps = state => ({ searchProduct: state.searchProduct });

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(setSearchBarProduct(value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
