import { combineReducers } from "redux";
import { allroomReducer } from "./roomReducer";

const reducer =  combineReducers({
allrooms : allroomReducer
})

export default reducer;