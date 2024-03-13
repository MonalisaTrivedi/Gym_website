import React, { useEffect } from 'react'
import Layout from '../common/Layout'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceDetails } from '../redux/serviceDetailSlice'

const ServiceDetails = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {res:ServiceDetails,status}=useSelector((state)=>{
        return state.serviceDetails
    })
    useEffect(()=>{
        dispatch(getServiceDetails(id))
    },[id])
  return (
    <>
    <Layout>
    <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Service Details</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Service Details</p>
            </div>
        </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
        <div className="card" style={{width: '100%'}}>
        <img className="img-fluid mb-4" src={`https://corefitserver.onrender.com/${ServiceDetails?.data?.image}`} alt="Image"/>
             <div className="card-body">
               <h3 className="card-title" style={{color:'blue',fontWeight:'bold'}}>{ServiceDetails?.data?.service_name}</h3>
               <p className="card-text" style={{color:'black'}}>{ServiceDetails?.data?.service_description}</p>
               <Link to={`/ServiceBooking/${id}`} className="btn btn-outline-primary mt-2 px-3">Join Now</Link>
             </div>
           </div>
        </div>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default ServiceDetails