import { configureStore } from "@reduxjs/toolkit";
import allRoomsReducer from "./slices/roomSlice"

const store = ()=> configureStore({
    reducer:{
        allRoomsReducer
    },
    devTools: process.env.NODE_ENV !== "production",
})

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;