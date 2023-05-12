import absoluteUrl from "next-absolute-url";
import axios from "axios"

export const getAdminRooms = createAsyncThunk(
    'allRooms/getAllRooms',
    async (_, thunkAPI,req) => {
      try {
        const {origin} = absoluteUrl(req);
        const { data } = await axios.get(`${origin}/api/rooms`);
        return data.rooms;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  );
  
  export const getRooms = (req) => async(dispatch) =>{
    try{
const data = await axios.get(`/api/rooms`);

dispatch({
    type : ALL_ROOM_SUCCESS,
    payload: data
})
    }catch(error){
        dispatch({
            type: ADMIN_ROOMS_FAIL,
            payload: error.response.data.message})
    }
  }