import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  roomCount: null,
  resPerPage: null,
  filteredRoomCount: null,
  error: null,
};

const allRoomsSlice = createSlice({
  name: "allRooms",
  initialState,
  reducers: {
    allRoomSuccess: (state, action) => {
      state.roomCount = action.payload.roomCount;
      state.resPerPage = action.payload.resPerPage;
      state.filteredRoomCount = action.payload.filteredRoomCount;
      state.rooms = action.payload.rooms;
      state.error = null;
    },
    allRoomFailure: (state, action) => {
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const { allRoomSuccess, allRoomFailure, clearErrors } =
  allRoomsSlice.actions;

export default allRoomsSlice.reducer;
