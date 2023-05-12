import { configureStore } from "@reduxjs/toolkit";
import allRoomsReducer from "./slices/roomSlice";

const store = configureStore({
  reducer: {
    allRoomsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const getState = store.getState;
const dispatch = store.dispatch;
export const RootState = getState();
export const AppDispatch = dispatch;

export default store;
