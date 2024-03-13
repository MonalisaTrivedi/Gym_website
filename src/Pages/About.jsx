import React from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom'
import About_comp from '../Components/About/About_comp'
import Features from '../Components/Home/Features'
import Trainer from '../Components/About/Trainer'

const About = () => {
  return (
   <>
   <Layout>
   <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">About Us</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">About Us</p>
            </div>
        </div>
    </div>
    <About_comp/>
    <Features/>
    <Trainer/>
   </Layout>
   </>
  )
}

export default About