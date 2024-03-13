import React, { useState } from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postContact } from '../redux/contactSlice'

const Contact = () => {
    const dispatch=useDispatch()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[message,setMessage]=useState('')
  
    const contact_us=async(e)=>{
     e.preventDefault()
      dispatch(postContact({name,email,phone,message}))
    }
  return (
   <>
   <Layout>
    {/* Header */}
   <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Contact Us</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Contact Us</p>
            </div>
        </div>
    </div>

    {/* <!-- Contact Start --> */}
    <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Get In Touch</h4>
            <h4 className="display-4 font-weight-bold">Email Us For Any Query</h4>
        </div>
        <div className="row px-3 pb-2">
            <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                <h4 className="font-weight-bold">Address</h4>
                <p>123 Street, New York, USA</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                <h4 className="font-weight-bold">Phone</h4>
                <p>+012 345 6789</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
                <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                <h4 className="font-weight-bold">Email</h4>
                <p>info@example.com</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 pb-5">
                <iframe style={{width: '100%', height: '392px',border:'0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="col-md-6 pb-5">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={contact_us}>
                        <div className="control-group">
                            <input type="text" className="form-control" name="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" 
                            value={name} onChange={e=>setName(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" name="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" 
                            value={email} onChange={e=>setEmail(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" name="phone" placeholder="Mobile No" required="required" data-validation-required-message="Please enter a Mobile No"
                            value={phone} onChange={e=>setPhone(e.target.value)} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="6" name="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" 
                            value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
   </Layout>
   </>
  )
}

export default Contact