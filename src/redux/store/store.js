import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import numberSlice from "../slice/numberSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        number: numberSlice
    }
})