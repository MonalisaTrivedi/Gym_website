import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getTeastimonial=createAsyncThunk('testimonial',async()=>{
    const res= await axiosInstance.get(`gettestimonial`)
    console.log(res)
    return res
})

const initialState={
    res:[],
    status:'idle'
}

const testimonialSlice=createSlice({
   name:'testimonial',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getTeastimonial.pending,(state,action)=>{
        state.status = 'loading'
    })
    .addCase(getTeastimonial.fulfilled,(state,action)=>{
        state.res=action.payload
        state.status = 'idle'
    })
    .addCase(getTeastimonial.rejected,(state,action)=>{
        state.status = 'error'
    })
   } 
})

export default testimonialSlice.reducer