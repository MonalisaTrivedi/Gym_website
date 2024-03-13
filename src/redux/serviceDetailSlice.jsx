import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";


export const getServiceDetails=createAsyncThunk('serviceDetail',async(id)=>{
    const res=await axiosInstance.get(`getservicedetails/${id}`)
    console.log(res)
    return res?.data
})

const initialState={
    res:[],
    status:'success'
}

const serviceDetailsSlice=createSlice({
    name:'serviceDetails',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getServiceDetails.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(getServiceDetails.fulfilled,(state,action)=>{
            console.log('abt srvc',action.payload)
            state.res=action.payload
            state.status='success'
        })
        .addCase(getServiceDetails.rejected,(state,action)=>{
            state.status='error'
        })
    }

})
export default serviceDetailsSlice.reducer