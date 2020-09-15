import { combineReducers } from "redux";
import launchesReducers from "./launchesReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  launches: launchesReducers,
  filter: filterReducer,
});
