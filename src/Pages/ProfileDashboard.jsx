import React, { useEffect } from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { redirectToProf } from '../redux/AuthSlice'
import { getServiceBooking } from '../redux/serviceBookingSlice'

const ProfileDashboard = () => {
    const dispatch=useDispatch()
    const { res:booking_details } = useSelector((state) => state?.serviceBooking);
    useEffect(()=>{
      dispatch(redirectToProf(null))
    },[])
    const name=localStorage.getItem("name")
    const email=localStorage.getItem('email')
    const DP=localStorage.getItem("image")
    const phone=localStorage.getItem("phone")
    const id = localStorage.getItem("id")

    console.log("Bookings", booking_details);
  
    useEffect(() => {
      dispatch(getServiceBooking(id));
    }, [id]);
  return (
   <>
   <Layout>
    {/* Dashboard Header */}
    <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Welcome {name}</h4>
            {/* <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/Login">Login</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Registration</p>
            </div> */}
        </div>
    </div>
    {/* Header end */}

    {/* Profile Body */}
 
     <section>
                    <div className="container-fluid py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-6 mb-4 mb-lg-0">
                                <div className="card mb-3" style={{ borderRadius: '1rem' }}>
                                    <div className="row g-0">
                                        <div className="col-md-5 text-center text-white pb-4" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: "#E31C25" }}>
                                            <img src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg" alt="Avatar" className="img-fluid my-5 rounded-circle" style={{ width: 100 }} />
                                            
                                            <h4 className='text-white'>{name}</h4>
                                            <p><span style={{color:'yellow',fontWeight:'bold'}}>Email Id :</span> <b>{email}</b></p>
                                            <p><span style={{color:'yellow',fontWeight:'bold'}}>Contact No :</span> <b>{phone}</b></p>
                                            <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f fa-lg me-3 text-white " /></Link>
                                            <Link to="https://www.twitter.com/"><i className="fab fa-twitter fa-lg me-3 text-white mx-3" /></Link>
                                            <Link to="https://www.instagram.com/"><i className="fab fa-instagram fa-lg text-white" /></Link>
                                           
                                        </div>


                                        {/* *******Booking section starts****** */}
                                        <div className="col-md-7" style={{ backgroundColor: "black" }}>
                                            <div className="card-body p-4">
                                                <h4 className='text-white'>Your Booking Status...</h4>
                                                <hr style={{ borderTop: '1px solid white' }} />

                                            
                                                {
                                                    booking_details?.data?.result?.map((item, index) => {
                                                        return (
                                                            <>
                                                                <div className="row pt-1">
                                                                    <div className="col-6 mb-3">
                                                                        <h6 className='text-white'>Training Name</h6>
                                                                        <p className="text-white"><b>{item?.serviceId?.service_name}</b></p>
                                                                    </div>
                                                                    <div className="col-6 mb-3">
                                                                        <h6 className='text-white'>Status</h6>
                                                                      
                                                                        {item.isPending ? <b>Pending...<span>&#8987;</span> </b> : <p className='text-white'>Approved <span>&#9989;</span></p>}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                                <div className="d-flex justify-content-start">
                                                    <i className="far fa-edit mb-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
   </Layout>
   </>
  )
}

export default ProfileDashboard