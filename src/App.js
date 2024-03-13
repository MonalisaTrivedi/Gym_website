import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes,Route, Navigate } from "react-router-dom";
import Service from "./Pages/Service";
// import Classes from "./Pages/Classes";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ProfileDashboard from "./Pages/ProfileDashboard";
import BlogDetails from "./Pages/BlogDetails";
import ServiceDetails from "./Pages/ServiceDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from "./Pages/Features";
import ServiceBooking from "./Pages/ServiceBooking";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { chk_token } from "./redux/AuthSlice";


function App() {
    const dispatch=useDispatch()
  const ProtectedRoute=({children})=>{
      const token=localStorage.getItem("token")|| sessionStorage.getItem("token")
      return token !==null && token!==undefined?(
        children
      ):(
        <Navigate to={'/Login'}/>
      )
  }
  const publicRouter=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/Login',
        element:<Login/>
    },
    {
        path:'/Registration',
        element:<Registration/>
    }

   ]
   const privateRouter=[
    {
        path:'/About',
        element:<About/>
    },
    {
        path:'/Service',
        element:<Service/>
    },
    {
        path:'/ServiceDetails/:id',
        element:<ServiceDetails/>
    },
    {
        path:'/ServiceBooking/:id',
        element:<ServiceBooking/>
    },
    {
        path:'/Features',
        element:<Features/>
    },
    {
        path:'/Blog',
        element:<Blog/>
    },
    {
        path:'/BlogDetails/:id',
        element:<BlogDetails/>
    },
    {
        path:'/ProfileDashboard/:id',
        element:<ProfileDashboard/>
    },
    {
        path:'/Contact',
        element:<Contact/>
    }
   ]

   useEffect(()=>{
    dispatch(chk_token())
},[])
  return (
   <>
   <ToastContainer/>
    <Routes>
    {
        publicRouter?.map((route,key)=>{
            return (<>
            <Route
            key={key+1}
            path={route?.path}
            element={route.element}/>
            </>)
        })
    }

{
        privateRouter?.map((route,key)=>{
            return (<>
            <Route
            key={key+1}
            path={route?.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}/>
            </>)
        })
    }
    </Routes>
   </>
  );
}

export default App;
