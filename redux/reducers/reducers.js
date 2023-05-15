import { combineReducers } from "redux";
import { allroomReducer ,roomDetailReducer } from "./roomReducer";

const reducer =  combineReducers({
allrooms : allroomReducer,
roomDetails : roomDetailReducer
})

export default reducer;