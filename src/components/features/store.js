import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./carSlider/sliderSlice";

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
    },
});
