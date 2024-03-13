import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanner } from '../../redux/bannerSlice'
import { Link } from 'react-router-dom'

const Banner = () => {
    const dispatch=useDispatch()
    const {res:Banner,state}=useSelector((state)=>{
        return state.banner
    })
    useEffect(()=>{
        dispatch(getBanner())
    },[])
  return (
   <>
   <div className="container-fluid p-0">
        <div id="blog-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {Banner?.data?.data?.map((item,key)=>{
                    return (<>
                     <div key={key} className={`carousel-item ${key===0?'active':''}`}>
                    <img className="w-100" src={`https://corefitserver.onrender.com/${item.image}`} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-primary text-capitalize m-0">{item.subtitle}</h3>
                        <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">{item.title}</h2>
                        <Link to="/Login" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</Link>
                    </div>
                </div>
                    </>)
                })}
                {/* <div class="carousel-item active">
                    <img class="w-100" src="img/carousel-1.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-primary text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                        <a href="" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-primary text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Get Body In Shape</h2>
                        <a href="" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                    </div>
                </div> */}
            </div>
            <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
   </>
  )
}

export default Banner