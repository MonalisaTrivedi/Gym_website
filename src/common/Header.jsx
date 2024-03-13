import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logOut } from '../redux/AuthSlice'

const Header = () => {
    const dispatch=useDispatch()
    const {LogoutToggle}=useSelector((state)=>state.auth)
  
    const log_out=()=>{
      dispatch(logOut())
    }
    const id = localStorage.getItem("id")
    const name=localStorage.getItem("name")
  return (
    <>
     <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="" className="navbar-brand">
                <div className='d-flex'>
                <img src='https://media.istockphoto.com/id/1331186720/vector/dumbbell.jpg?s=612x612&w=0&k=20&c=ztAKf6ZaSrWTBQVW7Nj2yrEbGM0FxitFrze39W-HdMs=' alt='' height={'60px'} width={'50px'} className='mt-2 mr-2 rounded-circle'/>
                <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">Fit<span style={{color:'red'}}>&</span>Fine</h1>
                </div>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                {/* <div className="navbar-nav ml-auto p-4 bg-secondary">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/About" className="nav-item nav-link">About Us</Link>
                    <Link to="/Service" className="nav-item nav-link">Services</Link>
                    <Link to="/Classes" className="nav-item nav-link">Classes</Link>
                    <Link to="/Blog" className="nav-item nav-link">Blog</Link>
                    <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                    <Link to="/Login" className="nav-item nav-link">Login</Link>
                </div> */}

                <div className="navbar-nav ml-auto p-4 bg-secondary">
                    <NavLink className={`nav-item nav-link ${window.location.pathname === "/" ? "active" : ""}`}  to='/'>Home</NavLink>
                    <NavLink className={`nav-item nav-link ${window.location.pathname === "/About" ? "active" : ""}`}  to='/About'>About</NavLink>
                    <NavLink className={`nav-item nav-link ${window.location.pathname === "/Features" ? "active" : ""}`}  to='/Features'>Our Features</NavLink>
                    <NavLink className={`nav-item nav-link ${window.location.pathname === "/Service" ? "active" : ""}`}  to='/Service'>Services</NavLink>
                    <NavLink className={`nav-item nav-link ${window.location.pathname === "/Blog" ? "active" : ""}`}  to='/Blog'>Blog</NavLink>
                    <NavLink className={`nav-item nav-link ${window.location.pathname === "/Contact" ? "active" : ""}`}  to='/Contact'>Contact</NavLink>
                    {
                        LogoutToggle?(<>
                        <NavLink className={`nav-item nav-link`}  to='/Login' onClick={log_out}>Logout</NavLink>
                        <NavLink className={`nav-item nav-link`}  to={`/ProfileDashboard/${id}`}>{name}</NavLink>
                        </>):(<>
                            <NavLink className={`nav-item nav-link ${window.location.pathname === "/Login" ? "active" : ""}`}  to='/Login'>Login</NavLink>
                        </>)
                    }
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Header