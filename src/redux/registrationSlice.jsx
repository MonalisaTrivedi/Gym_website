import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

export const postRegistration=createAsyncThunk('registraion',async(data)=>{
    const res=await axiosInstance.post(`register`,data)
    return res
})

const initialState={
    res:[],
    status:'success'
}

const registrationSlice=createSlice({
    name:'registration',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(postRegistration.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(postRegistration.fulfilled,(state,action)=>{
            toast('Registration Successfull')
            state.status='success'
        })
    }
})
export default registrationSlice.reducer