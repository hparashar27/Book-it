import { ALL_ROOMS_FAIL,ALL_ROOMS_SUCCESS,CLEAR_ERRORS,ROOM_DETAIL_FAIL,ROOM_DETAIL_SUCCESS } from "../constants/roomConstants"

// all rooms reducers
export const allroomReducer = (state={rooms:[]},action) =>{
  switch(action.type){
    case ALL_ROOMS_SUCCESS:
      return {
        rooms: action.payload.rooms ,
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage ,
        filteredRoomsCount: action.payload.filteredRoomsCount 
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

// get the room details ->

export const roomDetailReducer = (state={room:{}},action) =>{
  switch(action.type){
    case ROOM_DETAIL_SUCCESS :
      return{
        room : action.payload ?? {}
      }
    case ROOM_DETAIL_FAIL : 
      return{
        error : action.payload,
      }
      case CLEAR_ERRORS : return {
        ...state,
        error: null
    }
    default :
      return state
  }
}