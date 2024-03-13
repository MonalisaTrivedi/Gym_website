import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../api/axiosInstance"
import { toast } from "react-toastify"

export const postRegistration=createAsyncThunk('registraion',async(data)=>{
    const res=await axiosInstance.post(`register`,data)
    return res
    // toast(res?.data?.message)
})

export const login=createAsyncThunk('signin',async(data)=>{
    const response=await axiosInstance.post(`login`,data)
    return response
    // toast(response?.data?.message)
})

const initialState={
    userData:{},
    loading:false,
    redirectTo:null,
    redirectToor: null,
    redirectReg:null,
    LogoutToggle: false,
}
 
export const AuthSlice=createSlice({
    name:'authentication',
    initialState,
    reducers:{
        //for registration to login
        redirectToo: (state, { payload }) => {
            state.redirectTo = payload
        },
        //for login to profile
        redirectToProf: (state, { payload }) => {
            state.redirectToor = payload
        },
        //for register localstorage delete
        regLogOut:(state,{payload})=>{
            localStorage.removeItem("name")
        },
        //for 1st time logout chk
        chk_token:(state,{payload})=>{
            const token=localStorage.getItem("token")
            if(token !==null && token !== undefined){
                state.LogoutToggle=true
            }
        },
        //logout
        logOut:(state,{payload})=>{
            localStorage.removeItem("name")
            localStorage.removeItem("token")
            localStorage.removeItem("email")
            localStorage.removeItem("phone")
            localStorage.removeItem("id")
            localStorage.removeItem("image")
            // localStorage.removeItem("_id")
            state.LogoutToggle=false
        }
    },
extraReducers:(builder)=>{
    builder
    .addCase(postRegistration.pending,(state)=>{
        state.loading=true
    })
    .addCase(postRegistration.fulfilled,(state,{payload})=>{
        console.log('reg',payload)
        if(payload?.data?.success === true){
            localStorage.setItem("name",payload?.data?.savedMember?.name)
            state.redirectTo="/Login"
            toast(payload?.data?.message)
        }
        state.loading=false
    })
    .addCase(postRegistration.rejected,(state)=>{
        state.loading=false
        toast('email already exist')
    })

    //For login
    .addCase(login.pending,(state)=>{
        state.loading=true
    })
    .addCase(login.fulfilled,(state,{payload})=>{
        if(payload?.status === 200){
            console.log('pls hoe ja',payload)
            localStorage.setItem("name",payload?.data?.data?.name)
            localStorage.setItem("email",payload?.data?.data?.email)
            localStorage.setItem("id",payload?.data?.data?._id)
            localStorage.setItem("image",payload?.data?.data?.image)
            localStorage.setItem("phone",payload?.data?.data?.phone)
            localStorage.setItem("token",payload?.data?.token)
            state.redirectToor='/Service'
            state.LogoutToggle= true
            toast(payload?.data?.message)
        }
        state.loading=false
    })
    .addCase(login.rejected,(state,actions)=>{
        state.loading=false
        toast('email already exist')
    })
}
    
})

export const {redirectToo,redirectToProf,regLogOut,chk_token,logOut} =AuthSlice.actions