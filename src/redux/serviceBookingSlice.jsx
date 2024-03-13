import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

export const getServiceBooking=createAsyncThunk('serviceBooking',async(id)=>{
    const res=await axiosInstance.get(`viewBooking/${id}`)
    console.log(res)
    return res
})


const initialState={
    res:[],
    status:'success'
}

const serviceBookingSlice=createSlice({
    name:'serviceBooking',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getServiceBooking.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(getServiceBooking.fulfilled,(state,action)=>{
            state.res=action.payload
            state.status='success'
        })
        .addCase(getServiceBooking.rejected,(state,action)=>{
            state.status='error'
        })

    }
})

export default serviceBookingSlice.reducer