import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { profileReducer } from "./profileReducer";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  profile: profileReducer,
  todo: todoReducer,
});
export default rootReducer;
