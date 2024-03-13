import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "../bannerSlice";
import trainerSlice from "../trainerSlice";
import serviceSlice from "../serviceSlice";
import testimonialSlice from "../testimonialSlice";
import blogSlice from "../blogSlice";
import blogDetailsSlice from "../blogDetailsSlice";
import serviceDetailSlice from "../serviceDetailSlice";
// import registrationSlice from "../registrationSlice";
import serviceBookingSlice from "../serviceBookingSlice";
import { AuthSlice } from "../AuthSlice";
import contactSlice from "../contactSlice";
import { bookingSlice } from "../bookingSlice";

const Store=configureStore({
    reducer:{
        banner:bannerSlice,
        trainer:trainerSlice,
        service:serviceSlice,
        testimonial:testimonialSlice,
        blog:blogSlice,
        blogDetails:blogDetailsSlice,
        serviceDetails:serviceDetailSlice,
        // registration:registrationSlice,
        serviceBooking:serviceBookingSlice,
        auth:AuthSlice.reducer,
        contact:contactSlice,
        booking:bookingSlice.reducer
    }
})

export default Store