import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "박레고",
};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { increment, decrement, incrementByAmount } = actions;

export default reducer;
