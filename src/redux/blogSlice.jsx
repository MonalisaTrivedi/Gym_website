import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getBlog=createAsyncThunk('blog',async()=>{
    const res= await axiosInstance.get(`getblog`)
    console.log(res)
    return res
})

const initialState={
    res:[],
    status:'idle'
}

const blogSlice=createSlice({
   name:'blog',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getBlog.pending,(state,action)=>{
        state.status = 'loading'
    })
    .addCase(getBlog.fulfilled,(state,action)=>{
        state.res=action.payload
        state.status = 'idle'
    })
    .addCase(getBlog.rejected,(state,action)=>{
        state.status = 'error'
    })
   } 
})

export default blogSlice.reducer