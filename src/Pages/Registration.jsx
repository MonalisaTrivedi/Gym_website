import React, { useEffect, useState } from 'react'
import Layout from '../common/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { postRegistration } from '../redux/AuthSlice'


const Registration = () => {
    const[error,setError]=useState({})
    const dispatch=useDispatch()
    const {redirectTo}=useSelector((state)=>{
      return state.auth
    })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone:"",
        password: "",
        answer:"",
        image: null,
      });
      const nav = useNavigate();

      const validation=()=>{
        const error={}
        if(!formData.name){
          error.formData.name='*@Name Cannot be empty'
        }
        if(!formData.email){
          error.formData.email='*@Email Cannot be empty'
        }
        if(!formData.phone){
          error.formData.phone='*@Phone Cannot be empty'
        }
        if(!formData.password){
          error.formData.password='*@Password Cannot be empty'
        }
        if(!formData.answer){
            error.formData.answer='*@Answer Cannot be empty'
          }
       
        return error
      }
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({
          ...formData,
          image: e.target.files[0],
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("password", formData.password);
        formDataToSend.append("answer", formData.answer);
        formDataToSend.append("image", formData.image);
        
        const errorList=validation()
      setError(validation())
      if(Object.keys(errorList).length===0){
        try {
          dispatch(postRegistration(formDataToSend))
          setFormData({   
          name: "",
          email: "",
          phone:"",
          password: "",
          answer:"",
          image: null,
        })
        } catch (error) {
          toast('Something Wrong')
        }
      }
      
        // const response = await registerData(formDataToSend);
        // if (response.data && response.data.status == 200) {
        //   console.log("reg", response?.data);
        //   toast.success(response.data.message);
        //   nav("/");
        // } else {
        //   console.log("Error");
        //   toast.error(response?.data?.message);
        // }
      };

      useEffect(() => {
        const redirectUser = () => {
          let name = localStorage.getItem("name")
          let isInLoginPage = window.location.pathname.toLowerCase() === "/registration";
          if (name !== null && name !== undefined && name !== "") {
            isInLoginPage && nav("/Login");
          }
        }
        redirectUser();
      }, [redirectTo]);
  return (
    <>
    <Layout>
        {/* Header */}
   <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Registration</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/Login">Login</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Registration</p>
            </div>
        </div>
    </div>

      {/* Registration form start */}
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
                        <h1 className="mb-4 text-white">Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row mt-3">
                                <div className="col form-group">
                                    <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Name*" name="name" value={formData.name} onChange={handleInputChange} required/>
                                </div>
                                {/* <span>{error.name}</span> */}
                                <div className="col form-group">
                                    <input type="email" className="form-control form-control-lg bg-dark text-white" placeholder="Email*" name="email" value={formData.email} onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col form-group">
                                    <input type="number" className="form-control form-control-lg bg-dark text-white" placeholder="Phone*" name="phone" value={formData.phone} onChange={handleInputChange} required/>
                                </div>
                                <div className="col form-group">
                                    <input type="password" className="form-control form-control-lg bg-dark text-white" placeholder="Password*" name="password" value={formData.password} onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col form-group">
                                    <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="What is your favourite food?*" name="answer" value={formData.answer} onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col form-group">
                                    <input type="file" className="form-control form-control-lg bg-dark text-white" placeholder="Your image*"  name="image" accept="image/*" onChange={handleFileChange} required/>
                                </div>
                            </div>
                          
                            <div className="form-row">
                                <div className="col">
                                    <button type="submit" className="btn btn-lg btn-block btn-dark border-light">Sign up</button>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <h4>Already a member*?<Link to={'/Login'}>Login</Link></h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default Registration