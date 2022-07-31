import { combineReducers } from "redux";
import { counterReducer} from "./counterReducer";
import { profileReducer } from "./profileReducer";
import { todoReducer } from "./todoReducers";

const rootReducer = combineReducers({
    todo:todoReducer,
    profile:profileReducer,
    counter:counterReducer
})
export default rootReducer