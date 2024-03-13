import React from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom'
import GymFeatures from '../Components/Home/GymFeatures'
import Testimonials from '../Components/Service/Testimonials'
import Services_comp from '../Components/Service/Services_comp'

const Service = () => {
  return (
    <>
    <Layout>
    <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Our Services</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Our Services</p>
            </div>
        </div>
    </div>
    <Services_comp/>
    {/* <GymFeatures/> */}
    <Testimonials/>
    </Layout>
    </>
  )
}

export default Service