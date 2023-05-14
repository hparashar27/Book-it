import { ALL_ROOMS_FAIL,ALL_ROOMS_SUCCESS,CLEAR_ERRORS } from "../constants/roomConstants"

// all rooms reducers
export const allroomReducer = (state={rooms:[]},action) =>{
  switch(action.type){
    case ALL_ROOMS_SUCCESS:
      return {
        rooms: action.payload.rooms ,
        roomsCount: action.payload.roomsCount ?? null,
        resPerPage: action.payload.resPerPage ?? null,
        filteredRoomsCount: action.payload.filteredRoomsCount ?? null
      };

    case ALL_ROOMS_FAIL : return {
         error : action.payload
    }

    case CLEAR_ERRORS : return {
            ...state,
            error: null
        }

    default:
        return state
  }
}