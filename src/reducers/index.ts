import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { todoReducer } from "./todoReducer";
const rootReducer = combineReducers({
    todo:todoReducer,
    profile:profileReducer
})
export default rootReducer;
