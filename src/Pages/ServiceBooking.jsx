import React, { useEffect, useState } from 'react'
import Layout from '../common/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceDetails } from '../redux/serviceDetailSlice'
import { booking } from '../redux/bookingSlice'

const ServiceBooking = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {res:ServiceDetails}=useSelector((state)=>{
        return state.serviceDetails
    })
    console.log('detail',ServiceDetails)
    useEffect(()=>{
        dispatch(getServiceDetails(id))
    },[id])
    const name=localStorage.getItem("name")
    const email=localStorage.getItem("email")
    const memberId = localStorage.getItem('id');
    const serviceName = ServiceDetails?.data?.service_name
    const serviceId = id

  const [scheme, setScheme] = useState();
  const [price, setPrice] = useState('0');
  

  useEffect(() => {
    if (serviceId) {
      switch (scheme) {
        case "Yearly":
          setPrice("12000");
          break;
        case "Half-yearly":
          setPrice("8000");
          break;
        case "Quarterly":
          setPrice("3500");
          break;
        default:
          setPrice("0")
      }
    }
  }, [scheme, price]);

const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(booking({ name, email, scheme, price, serviceId, memberId }));

    // dispatch(FetchBookingDetails(memberId));
    navigate(`/ProfileDashboard/${memberId}`)
  }
  return (
    <>
    <Layout>
    <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Booking Services</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Booking Services</p>
            </div>
        </div>
    </div>
    <div className="container gym-class mb-5 mt-3">
        <div className="row px-3 py-5">
            <div className="col-md-6 p-0">
                <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Connect With Us To Achive Ultimate Fitness Goal</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    {/* <Link to="/Service" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link> */}
                </div>
            </div>
            <div className="col-md-6 p-0">
            <div className="booking-form mx-3">
            <h3 className="display-4 mb-3 text-black font-weight-bold">Book Your Service Today</h3>
            <h4 className="display-5 mb-3 text-black ">Start Your {serviceName} Journey Now</h4>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={(e) => handleSubmit(e)}>
                    <div className="control-group">
                            <input type="hidden" className="form-control" value={memberId} required="required" data-validation-required-message="Please enter your name" readOnly/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" value={name} required="required" data-validation-required-message="Please enter your name" readOnly/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" value={email} required="required" data-validation-required-message="Please enter your email" readOnly />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="hidden" className="form-control" value={serviceId} required="required" data-validation-required-message="Please enter your name" readOnly/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="service_name" value={serviceName} required="required" data-validation-required-message="Please enter a Service Name" readOnly/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                           {/* <label for="exampleFormControlSelect1">Select Your Scheme</label> */}
                           <select className="form-control" id="exampleFormControlSelect1" name='scheme' value={scheme} onChange={(e)=>setScheme(e.target.value)}>
                           <option value="" >Select Your Scheme</option>
                            <option value="Yearly">Yearly</option>
                            <option value="Half-yearly">Half-yearly</option>
                            <option value="Quarterly">Quarterly</option>
                           </select>
                         </div>
                         <div className="control-group">
                            <input type="number" className="form-control" id="price" placeholder="0" value={price} required="required"  />
                            <p className="help-block text-danger"></p>
                        </div>
                    
                        <div>
                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Book Now</button>
                        </div>
                    </form>
                </div>
           
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default ServiceBooking