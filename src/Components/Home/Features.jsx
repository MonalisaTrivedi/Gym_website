import React from 'react'

const Features = () => {
  return (
    <>
     <div className="container-fluid my-5">
        <div className="row">
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight: '300px'}}>
                    <i className="flaticon-training display-3 text-primary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">Progression</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-primary text-white px-5" style={{minHeight: '300px'}}>
                    <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">Workout</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight: '300px'}}>
                    <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">Nutrition</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features