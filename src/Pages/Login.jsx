import React, { useEffect, useState } from 'react'
import Layout from '../common/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, regLogOut } from '../redux/AuthSlice'

const Login = () => {
    const dispatch=useDispatch()
    const navi=useNavigate()
    const {redirectToor,loading}=useSelector((state)=>{
      return state.auth
    })
    // const id = localStorage.getItem("_id")
  const initialValue={
    email:'',
    password:''
  }
    const [user,setUser]=useState(initialValue)
  const handelChange=(e)=>{
  const {name,value}=e.target
  setUser({...user,[name]:value})
  }
  
  const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(user))
        // navi('/Profile')
  }
  useEffect(()=>{
  const redirectUser=()=>{
    let name=localStorage.getItem('token')
    let isInLoginPage=window.location.pathname.toLowerCase()==='/login'
    if(name !==null && name!==undefined && name !==""){
        console.log("ki holo")
        isInLoginPage && navi('/Service')
    }
  }
  
  redirectUser()
  },[redirectToor])


    const reg=()=>{
        dispatch(regLogOut())
      }
  return (
   <>
   <Layout>
    {/* Header */}
   <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Login</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/Registration">Registration</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Login</p>
            </div>
        </div>
    </div>

    {/* <!-- Login Form Start --> */}
    <div className="container-fluid position-relative bmi my-5">
        <div className="container">
            <div className="row px-3 align-items-center">
                <div className="col-md-6">
                    <div className="pr-md-3 d-none d-md-block">
                        {/* <h4 class="text-primary">Body Mass Index </h4> */}
                        {/* <h4 class="display-4 text-white font-weight-bold mb-4">Don't have an Account?</h4>
                        <p class="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p> */}
                    </div>
                </div>
                <div className="col-md-6 bg-secondary py-5">
                    <div className="py-5 px-3">
                        <h1 className="mb-4 text-white">Login to your Account</h1>
                        <form onSubmit={handelSubmit}>
                        <div className="form-row">
                                {/* <div class="col">
                                    <h3>Don't have an Account?
                                    <Link to={'/Registration'}>Sign Up Here</Link></h3>
                                </div> */}
                            </div>
                            <div className="form-row mt-3">
                                <div className="col form-group">
                                    <input type="email" className="form-control form-control-lg bg-dark text-white" placeholder="Email Id*" required name='email' onChange={handelChange}/>
                                </div>
                              
                            </div>
                            <div class="form-row">
                                  <div className="col form-group">
                                    <input type="password" className="form-control form-control-lg bg-dark text-white" placeholder="Password*" required name='password' onChange={handelChange}/>
                                </div>
                            </div>
                            {
                                loading?(<div className="form-row">
                                <div className="col">
                                    <button className="btn btn-lg btn-block btn-dark border-light"
                                       >Loading...<div class="spinner-border text-primary" role="status">
                                       <span class="sr-only">Loading...</span>
                                     </div>
                                       </button>
                                </div>
                            </div>):(<div className="form-row">
                                <div className="col">
                                    <button type="submit" className="btn btn-lg btn-block btn-dark border-light"
                                       >Login</button>
                                </div>
                            </div>)
                            }
                            
                            <div className="col mt-2">
                                    <h6>Don't have an Account?
                                    <Link to={'/Registration'} onClick={reg}>SignUp Here*</Link></h6>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Login Form End --> */}
   </Layout>
   </>
  )
}

export default Login