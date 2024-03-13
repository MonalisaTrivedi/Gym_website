import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../redux/serviceSlice'
import { Link } from 'react-router-dom'

const GymFeatures = () => {
    const dispatch=useDispatch()
    const {res:Service,state}=useSelector((state)=>{
        return state.service
    })
    useEffect(()=>{
        dispatch(getServices())
    },[])
    
  return (
   <>
   <div className="container feature pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
            <h4 className="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
        </div>
        <div className="row">
            {
              Service?.data?.data?.map((item,key)=>{
                    return (<>
                        <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={`https://corefitserver.onrender.com/${item.image}`} alt="Image"/>
                        <i className="flaticon-barbell"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">{item.service_name}</h4>
                        <p>{item.service_description.slice(0,150)}</p>
                        {/* <Link to={`/ServiceDetails/${item?._id}`} className="btn btn-outline-primary mt-2 px-3">Details</Link> */}
                    </div>
                </div>
            </div>
                    </>)
              })   
            }
            {/* <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src="img/feature-1.jpg" alt="Image"/>
                        <i className="flaticon-barbell"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Videos Instruction</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src="img/feature-2.jpg" alt="Image"/>
                        <i className="flaticon-training"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Training Calendar</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src="img/feature-3.jpg" alt="Image"/>
                        <i className="flaticon-trends"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src="img/feature-4.jpg" alt="Image"/>
                        <i className="flaticon-support"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Community Support</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
   </>
  )
}

export default GymFeatures