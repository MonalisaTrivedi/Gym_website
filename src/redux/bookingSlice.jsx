import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

export const booking = createAsyncThunk("booking", async (data) => {
    try {
      const response = await axiosInstance.post(`booking`, data);
      return response;
    } catch (error) {
      toast(error?.response?.data?.message)
    }
  })

  const initialState={
    loading:false
}

export const bookingSlice=createSlice({
    name:'Booking',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //for booking
        .addCase(booking.pending,(state)=>{
            state.loading=true
        })
        .addCase(booking.fulfilled,(state,{payload})=>{
          console.log('data',payload)
            if(payload.status===200){
            console.log('data',payload)
            state.loading=false
            toast(payload?.data?.message)
            }
            
        })
        .addCase(booking.rejected,(state)=>{
            state.loading=false
        })
    }
})
