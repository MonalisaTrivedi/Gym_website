import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrainer } from '../../redux/trainerSlice'

const Trainer = () => {
    const dispatch=useDispatch()
    const {res:Trainer,state}=useSelector((state)=>{
        return state.trainer
    })
    useEffect(()=>{
        dispatch(getTrainer())
    },[])
  return (
    <>
    <div className="container pt-5 team">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Our Trainers</h4>
            <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
        </div>
        <div className="row">
            {
                Trainer?.data?.data?.map((item,key)=>{
                    return (<>
                    <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src={`https://corefitserver.onrender.com/${item.image}`} alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary"><span style={{color:'white'}}>Trainer Name: </span>{item.name}</h4>
                        <p className="card-text"><span style={{color:'red'}}>Speciality:</span>{item.speciality}</p>
                        -------------------------------
                        <p>With {item.experience} experience</p>
                    </div>
                </div>
            </div>
                    </>)
                })
            }
            {/* <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src="img/team-1.jpg" alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Trainer Name</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src="img/team-2.jpg" alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:
                        '40px', height: '40px'}} href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '40px', height: '40px'}} href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="card-body bg-secondary">
                        <h4 class="card-title text-primary">Trainer Name</h4>
                        <p class="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <div class="card border-0 bg-secondary text-center text-white">
                    <img class="card-img-top" src="img/team-3.jpg" alt=""/>
                    <div class="card-social d-flex align-items-center justify-content-center">
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="card-body bg-secondary">
                        <h4 class="card-title text-primary">Trainer Name</h4>
                        <p class="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <div class="card border-0 bg-secondary text-center text-white">
                    <img class="card-img-top" src="img/team-4.jpg" alt=""/>
                    <div class="card-social d-flex align-items-center justify-content-center">
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:  '40px', height: '40px'}} href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="card-body bg-secondary">
                        <h4 class="card-title text-primary">Trainer Name</h4>
                        <p class="card-text">Trainer</p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Trainer