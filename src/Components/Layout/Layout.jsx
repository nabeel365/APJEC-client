import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSlider from '../HomePage/TopSlider';
import CustomerReview from '../HomePage/CustomerReview';

const Layout = () => {
    return (
        <div>
            <TopSlider></TopSlider>



            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Layout;