import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../../redux/blogSlice'
import { Link } from 'react-router-dom'

const Blog_comp = () => {

    const dispatch=useDispatch()
    const [count,setCount]= useState(4);
    const {res:Blogs,status}=useSelector((state)=>{
        return state.blog
    })
    useEffect(()=>{
        dispatch(getBlog())
    },[count])
  return (
    <>
     <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 class="text-primary font-weight-bold">Our Blog</h4>
            <h4 class="display-4 font-weight-bold">Latest Article From Blog</h4>
        </div>
        <div className="row">
            {
              Blogs?.data?.data?.slice(0,count)?.map((item,key)=>{
                    return (<>
            <div className="col-lg-6 mb-5 blog-item">
                <img className="img-fluid mb-4" src={`https://corefitserver.onrender.com/${item.image}`} alt="Image"/>
                <div className="d-flex align-items-center mb-4">
                    {/* <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: '80px', height: '80px'}}>
                        <small>01</small>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div> */}
                    <div className="pl-3">
                        <h3 className="font-weight-bold">{item.title}</h3>
                        <h6 className="font-weight-bold " style={{color:'gray'}}>{item.title}</h6>
                        {/* <div class="d-flex">
                            <small class="mr-2 text-muted"><i class="fa fa-user"></i> Admin</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div> */}
                    </div>
                </div>
                <p>{item.content}</p>
                <Link className="btn btn-outline-primary mt-2 px-3" to={`/BlogDetails/${item?._id}`}>Read More <i class="fa fa-angle-right"></i></Link>
            </div>
                    </>)
              })  
            }
            {/* <div class="col-lg-6 mb-5 blog-item">
                <img class="img-fluid mb-4" src="img/blog-1.jpg" alt="Image"/>
                <div class="d-flex align-items-center mb-4">
                    <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: '80px', height: '80px'}}>
                        <small>01</small>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div class="pl-3">
                        <h3 class="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex">
                            <small class="mr-2 text-muted"><i class="fa fa-user"></i> Admin</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                <a class="btn btn-outline-primary mt-2 px-3" href="">Read More <i class="fa fa-angle-right"></i></a>
            </div>
            <div class="col-lg-6 mb-5 blog-item">
                <img class="img-fluid mb-4" src="img/blog-2.jpg" alt="Image"/>
                <div class="d-flex align-items-center mb-4">
                    <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{width: '80px', height: '80px'}}>
                        <small>01</small>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div class="pl-3">
                        <h3 class="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex">
                            <small class="mr-2 text-muted"><i class="fa fa-user"></i> Admin</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                <a class="btn btn-outline-primary mt-2 px-3" href="">Read More <i class="fa fa-angle-right"></i></a>
            </div> */}
        </div>
    </div>
    <div className="text-center">
    <button type="button" class="btn btn-dark" onClick={() => { setCount(count + 4);}}>More Blogs</button>
                   
                  </div>
    </>
  )
}

export default Blog_comp