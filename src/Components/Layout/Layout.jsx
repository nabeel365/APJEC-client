import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSlider from '../HomePage/TopSlider';
import CustomerReview from '../HomePage/CustomerReview';
import PopularClasses from '../HomePage/PopularClasses';
import PopularInstructors from '../HomePage/PopularInstructors';
import { Fade, Reveal, Roll, Slide, Zoom } from 'react-awesome-reveal';

const Layout = () => {
    return (
        <div>
            <Slide direction="left">
            <TopSlider></TopSlider> 

            </Slide>


            <Roll>
            <PopularClasses></PopularClasses> 

            </Roll>




            <Fade duration={2000} >
            <PopularInstructors></PopularInstructors>

            </Fade>





            <Zoom>
            <CustomerReview></CustomerReview>

            </Zoom>


        </div>
    );
};

export default Layout;