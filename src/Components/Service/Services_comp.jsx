import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../redux/serviceSlice'
import { Link } from 'react-router-dom'

const Services_comp = () => {
    const dispatch=useDispatch()
    const {res:Service,state}=useSelector((state)=>{
        return state.service
    })
    useEffect(()=>{
        dispatch(getServices())
    },[])
  return (
    <>
     <div className="container pt-5 team">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Our Services</h4>
            <h4 className="display-4 font-weight-bold">Choose From Our Services</h4>
        </div>
        <div className="row">
            {
                Service?.data?.data?.map((item,key)=>{
                    return (<>
                    <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src={`https://corefitserver.onrender.com/${item.image}`} alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">{item.service_name}</h4>
                        <p className="card-text">Trainer:{item.trainer_details[0].name}</p>
                        <Link to={`/ServiceDetails/${item?._id}`} className="btn btn-outline-primary mt-2 px-3">Explore</Link>
                    </div>
                </div>
            </div>
                    </>)
                })
            }
           
        </div>
    </div>
    </>
  )
}

export default Services_comp