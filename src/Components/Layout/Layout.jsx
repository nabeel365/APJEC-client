import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSlider from '../HomePage/TopSlider';

const Layout = () => {
    return (
        <div>
            <TopSlider></TopSlider>
        </div>
    );
};

export default Layout;