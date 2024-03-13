import React from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom'
import Blog_comp from '../Components/Blog/Blog_comp'

const Blog = () => {
  return (
    <>
    <Layout>
    <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: '400px'}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Our Blog</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Our Blog</p>
            </div>
        </div>
    </div>
    <Blog_comp/>
    </Layout>
    </>
  )
}

export default Blog