import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getTrainer=createAsyncThunk('trainer',async()=>{
    const res= await axiosInstance.get(`gettrainer`)
    console.log(res)
    return res
})

const initialState={
    res:[],
    status:'idle'
}

const trainerSlice=createSlice({
   name:'trainer',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getTrainer.pending,(state,action)=>{
        state.status = 'loading'
    })
    .addCase(getTrainer.fulfilled,(state,action)=>{
        state.res=action.payload
        state.status = 'idle'
    })
    .addCase(getTrainer.rejected,(state,action)=>{
        state.status = 'error'
    })
   } 
})

export default trainerSlice.reducer