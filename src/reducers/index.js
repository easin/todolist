import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import tag from "./tag";
import task from "./task";
import user from "./user";
export default combineReducers({
  tag,
  task,
  user,
  routing: routerReducer
});
