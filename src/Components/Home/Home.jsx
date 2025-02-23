import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout';
import { Outlet } from 'react-router-dom';
import DevelopedBy from '../../DevelopedBy/DevelopedBy';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar toggleMode={toggleMode} isDarkMode={isDarkMode} />
      
      <Outlet />
      <Footer isDarkMode={isDarkMode} />
      <DevelopedBy></DevelopedBy>
    </div>
  );
};

export default Home;
