import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice";
import reviewSlice from "./review-slice";



const store = configureStore({
    reducer:{
        movies:movieSlice.reducer,
        review: reviewSlice.reducer,
    }
})
export default store