import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rooms : [],
}

const allroomsSlice = createSlice({
    name :"allRooms",
    initialState,
    reducers:{
        allRoomSuccess:(state,action)=>{
            state.roomCount = action.payload.roomCount;
            state.resPerPage = action.payload.resPerPage;
            state.filteredRoomCount = action.payload.filteredRoomCount;
            state.rooms = action.payload.rooms;
        },
        allRoomFailure:(state,action)=>{
state.error = action.payload;
        },
        clearErrors:(state)=>{
state.error = null;
        },
    },    
})

export const {allRoomSuccess,allRoomFailure,clearErrors} = allroomsSlice.actions

export default allroomsSlice.reducer