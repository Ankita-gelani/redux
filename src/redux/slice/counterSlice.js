import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
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

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer