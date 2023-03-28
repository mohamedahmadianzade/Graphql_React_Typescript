import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slice/app.slice";

const store = configureStore({
    reducer: {
        app: AppSlice.reducer
    }
})
export default store;