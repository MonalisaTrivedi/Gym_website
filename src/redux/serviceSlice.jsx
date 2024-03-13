import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getServices=createAsyncThunk('service',async()=>{
    const res= await axiosInstance.get(`getservice`)
    console.log(res)
    return res
})

const initialState={
    res:[],
    status:'idle'
}

const serviceSlice=createSlice({
   name:'service',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getServices.pending,(state,action)=>{
        state.status = 'loading'
    })
    .addCase(getServices.fulfilled,(state,action)=>{
        state.res=action.payload
        state.status = 'idle'
    })
    .addCase(getServices.rejected,(state,action)=>{
        state.status = 'error'
    })
   } 
})

export default serviceSlice.reducer