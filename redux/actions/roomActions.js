import axios from "axios";
import absoluteUrl from "next-absolute-url"
import { ALL_ROOMS_FAIL,ALL_ROOMS_SUCCESS,CLEAR_ERRORS } from "../constants/roomConstants";

export const getRooms = (req) => {
    return async (dispatch) => {
      try {
        const { origin } = absoluteUrl(req);
        const { data } = await axios.get(`http://localhost:3000/api/rooms`);
        dispatch({
          type: ALL_ROOMS_SUCCESS,
          payload: data
        });
        return Promise.resolve(); // resolve the Promise after dispatch is complete
      } catch (error) {
        dispatch({
          type: ALL_ROOMS_FAIL,
          payload: error.response.data.message,
        });
        return Promise.reject(error); // reject the Promise if there's an error
      }
    };
  };
  

export const clearErrors = () => async(dispatch) =>{
    dispatch({
        type : CLEAR_ERRORS,
    })
}