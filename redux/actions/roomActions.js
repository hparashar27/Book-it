import axios from "axios";
import absoluteUrl from "next-absolute-url"
import { ALL_ROOMS_FAIL,ALL_ROOMS_SUCCESS,CLEAR_ERRORS,ROOM_DETAIL_FAIL,ROOM_DETAIL_SUCCESS } from "../constants/roomConstants";

export const getRooms = (req,currentPage=1,location="",guests,roomType) => {
    return async (dispatch) => {
      try {
        const { origin } = absoluteUrl(req);
        let Link = `${origin}/api/rooms?page=${currentPage}&location=${location}`;
        if(guests){
         Link.concat(`&guests=${guests}`)
        }
        if(roomType){
          Link.concat(`&roomtype=${roomType}`)
        }

        const  {data} = await axios.get(Link)
        dispatch({
          type: ALL_ROOMS_SUCCESS,
          payload: data
        });
        // return Promise.resolve(); // resolve the Promise after dispatch is complete
      } catch (error) {
        dispatch({
          type: ALL_ROOMS_FAIL,
          payload: error.response.data.message,
        });
        // return Promise.reject(error); // reject the Promise if there's an error
      }
    };
  };
  
export const getRoomDetail = (req,id) => {
 return async(dispatch)=>{
    try{
  const {origin} = absoluteUrl(req);
  const {data} = await axios.get(`${origin}/api/rooms/${id}`);
  dispatch({
    type : ROOM_DETAIL_SUCCESS,
    payload : data
  })
    }catch(error){
    dispatch({
      type:ROOM_DETAIL_FAIL,
    payload:error.response.data.message,
    })
  }
}
} 
  
export const clearErrors = () => async(dispatch) =>{
    dispatch({
        type : CLEAR_ERRORS,
    })
}