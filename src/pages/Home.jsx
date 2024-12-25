import React from 'react';
import Banner from './Banner';
import About from '../components/About';
import TopFoods from '../pages/TopFoods';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TopFoods></TopFoods>
        </div>
    );
};

export default Home;