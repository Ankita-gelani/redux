import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: "number",
    initialState: 0,
    reducers: {
        increment : (state, action) => {
            state += 1;
            return state;
        },
        decrement : (state, action) => {
            state -= 1
            return state;
        },
        incrementByAmount : (state, action) => {
            state += action.payload;
            return state;
        },
        reset : (state, action) => {
            state = 0;
            return state;
        }
    }
})

export const { increment, decrement, incrementByAmount, reset } = numberSlice.actions

export default numberSlice.reducer