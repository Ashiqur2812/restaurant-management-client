import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {

    return (
        <div className='mx-10'>
            {/* Navbar */}
            <Navbar />
            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;

// min-h-[calc(100vh-306px)]