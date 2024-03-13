import React from 'react'
import Layout from '../common/Layout'
import Banner from '../Components/Home/Banner'
import GymClass from '../Components/Home/GymClass'
import Features from '../Components/Home/Features'
import GymFeatures from '../Components/Home/GymFeatures'
import Subscribe from '../Components/Home/Subscribe'
import Trainer from '../Components/About/Trainer'
import Testimonials from '../Components/Service/Testimonials'
import Blog_comp from '../Components/Blog/Blog_comp'
import About_comp from '../Components/About/About_comp'
import Services_comp from '../Components/Service/Services_comp'

const Home = () => {
  return (
    <>
    <Layout>
        <Banner/>
        <GymClass/>
        <About_comp/>
        <Features/>
        <GymFeatures/>
        <Services_comp/>
        {/* <Subscribe/> */}
        <Trainer/>
        <Testimonials/>
        {/* <Blog_comp/> */}
    </Layout>
    </>
  )
}

export default Home