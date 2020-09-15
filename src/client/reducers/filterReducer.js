// Filters Reducer

const filtersReducerDefaultState = {
  year: "",
  launch: "",
  landing: "",
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_YEAR_FILTER":
      return {
        ...state,
        year: action.year,
      };
    case "SET_LAUNCH_FILTER":
      return {
        ...state,
        launch: action.launch,
      };
    case "SET_LANDING_FILTER":
      return {
        ...state,
        landing: landing,
      };
    default:
      return state;
  }
};
