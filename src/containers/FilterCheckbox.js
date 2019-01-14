import { connect } from "react-redux";
import Checkbox from "../components/Checkbox";
import { CheckboxFilters, setCheckbox } from "../actions/index";

const mapStateToProps = state => ({
  checked: state.checkboxFilter === CheckboxFilters.CHECK_ALL
});

const mapDispatchToProps = dispatch => ({
  onChange: checked =>
    dispatch(
      setCheckbox(
        checked === true
          ? CheckboxFilters.CHECK_STOCK_ONLY
          : CheckboxFilters.CHECK_ALL
      )
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);
