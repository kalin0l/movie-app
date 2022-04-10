import { createSlice } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    name:'review',
    initialState:{
        comments:[],
        comment:'',
        newComment:[],
        rate:null,
        createdRate:[],
        getRate:[],
        rateId:''

    },
    reducers:{
        setComment(state,action){
            state.comment = action.payload
        },
        setComments(state,action){
            state.comments = action.payload;
        },
        setNewComment(state,action){
            state.newComment = action.payload
        },
        setCreatedRate(state,action){
            state.createdRate = action.payload
        },
        getRating(state,action){
            state.getRate = action.payload
            
        },
        setInputRate(state,action){
            state.rate = action.payload;
        },
        setRateId(state,action){
            state.rateId = action.payload;
        }
    }
});
export const reviewSliceActions = reviewSlice.actions;
export default reviewSlice;