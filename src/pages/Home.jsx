import React from 'react';
import Banner from './Banner';
import About from '../components/About';
import TopFoods from '../pages/TopFoods';
import UpcomingEvents from './UpcomingEvents';
import CustomerReviews from './CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <TopFoods />
            <CustomerReviews />
            <UpcomingEvents />
        </div>
    );
};

export default Home;