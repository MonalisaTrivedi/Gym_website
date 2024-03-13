import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"


export const postContact=createAsyncThunk('postContact/axios',async(data)=>{
    const response=await axios.post(`https://restapinodejs.onrender.com/api/contact/create`,data)
    return response
})


const initialState={
    res:{},
    loading:false
}

const contactSlice=createSlice({
    name:'contact',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(postContact.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(postContact.fulfilled,(state,action)=>{
            toast('Message Send Successfully')
            state.loading=false
        })
        .addCase(postContact.rejected,(state,action)=>{
            toast('Some error occured')
            state.loading=false
        })
    }
})

export default contactSlice.reducer