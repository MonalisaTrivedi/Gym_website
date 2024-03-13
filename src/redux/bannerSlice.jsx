import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getBanner=createAsyncThunk('banner',async()=>{
    const res= await axiosInstance.get(`getbanner`)
    console.log(res)
    return res
})

const initialState={
    res:[],
    status:'idle'
}

const bannerSlice=createSlice({
   name:'banner',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getBanner.pending,(state,action)=>{
        state.status = 'loading'
    })
    .addCase(getBanner.fulfilled,(state,action)=>{
        state.res=action.payload
        state.status = 'idle'
    })
    .addCase(getBanner.rejected,(state,action)=>{
        state.status = 'error'
    })
   } 
})

export default bannerSlice.reducer