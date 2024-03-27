import { createSlice } from "@reduxjs/toolkit";

type State = {
    value: number;
}

const initialState: State = {
    value: 0,
};

export const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        next: (state) => {
            state.value !== 3 ? (state.value = +1) : (state.value = 0);
        },
        previous: (state) => {
            state.value !== 0 ? (state.value -= 1) : (state.value = 3);
        }
    },
});

export const { next, previous } = sliderSlice.actions;

export default sliderSlice.reducer;