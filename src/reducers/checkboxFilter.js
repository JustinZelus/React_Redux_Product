import { CheckboxFilters } from "../actions/index";

const checkboxFilter = (state = CheckboxFilters.CHECK_ALL, action) => {
  switch (action.type) {
    case "SET_CHECK_BOX":
      return action.filter;
    default:
      return state;
  }
};

export default checkboxFilter;
