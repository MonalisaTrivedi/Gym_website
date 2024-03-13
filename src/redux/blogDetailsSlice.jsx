import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getBlogDetail=createAsyncThunk('blogDetails',async(id)=>{
    const res=await axiosInstance.get(`getblogdetails/${id}`)
    console.log(res)
    return res?.data
})

const initialState={
    res:[],
    status:'idle'
}

const blogDetailsSlice=createSlice({
    name:'blogDetails',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogDetail.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(getBlogDetail.fulfilled,(state,action)=>{
            state.res=action.payload
            state.status='idle'
        })
        .addCase(getBlogDetail.rejected,(state,action)=>{
            state.status='error'
        })
    }
})

export default blogDetailsSlice.reducer