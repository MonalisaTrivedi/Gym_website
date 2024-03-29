import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeastimonial } from '../../redux/testimonialSlice'

const Testimonials = () => {

    const dispatch=useDispatch()
    const {res:Testimonials,state}=useSelector((state)=>{
        return state.testimonial
    })
    useEffect(()=>{
        dispatch(getTeastimonial())
    },[])
    
  return (
    <>
     <div class="container-fluid position-relative testimonial my-5">
        <div class="container">
            <div class="row px-3 align-items-center">
                <div class="col-md-6 bg-secondary">
                    <div class="d-flex align-items-center px-3" style={{minHeight: '450px'}}>
                        <div id="carouselId" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselId" data-slide-to="1"></li>
                                <li data-target="#carouselId" data-slide-to="2"></li>
                                <li data-target="#carouselId" data-slide-to="3"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                {
                                    Testimonials?.data?.data?.map((item,key)=>{
                                        return (<>
                                          <div key={key} className={`carousel-item ${key===0?'active':''}`}>
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src={`https://corefitserver.onrender.com/${item.image}`} alt="Image"/>
                                        <div class="pl-4">
                                            <h4 class="text-primary">{item.client_name}</h4>
                                            <p class="m-0">{item?.service_details[0]?.service_name}</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        {/* Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita */}
                                        {item.review}
                                    </div>
                                </div>
                                        </>)
                                    })
                                }
                                {/* <div class="carousel-item active">
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src="img/testimonial-1.jpg" alt="Image"/>
                                        <div class="pl-4">
                                            <h4 class="text-primary">Client Name</h4>
                                            <p class="m-0">Profession</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src="img/testimonial-2.jpg" alt="Image"/>
                                        <div class="pl-4">
                                            <h4 class="text-primary">Client Name</h4>
                                            <p class="m-0">Profession</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src="img/testimonial-3.jpg" alt="Image"/>
                                        <div class="pl-4">
                                            <h4 class="text-primary">Client Name</h4>
                                            <p class="m-0">Profession</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="pl-md-3 d-none d-md-block">
                        <h4 class="text-primary">Testimonial</h4>
                        <h4 class="display-4 mb-4 text-white font-weight-bold">What Our Clients Say?</h4>
                        <p class="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials