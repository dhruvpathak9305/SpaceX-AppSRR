import { combineReducers } from "redux";
import launchesReducers from "./launchesReducer";

export default combineReducers({
  launches: launchesReducers,
});
