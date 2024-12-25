import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {

    return (
        <div className=''>
            <div className=''>
                <Navbar />
            </div>
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;

// min-h-[calc(100vh-306px)]