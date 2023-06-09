import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSlider from '../HomePage/TopSlider';
import CustomerReview from '../HomePage/CustomerReview';
import PopularClasses from '../HomePage/PopularClasses';
import PopularInstructors from '../HomePage/PopularInstructors';

const Layout = () => {
    return (
        <div>
            <TopSlider></TopSlider> 

            <PopularClasses></PopularClasses> 

            <PopularInstructors></PopularInstructors>

            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Layout;