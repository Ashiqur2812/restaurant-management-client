import React from 'react';
import Banner from './Banner';
import About from '../components/About';
import TopFoods from '../pages/TopFoods';
import UpcomingEvents from './UpcomingEvents';
import CustomerReviews from './CustomerReviews';
import CountdownTimer from './CountdownTimer';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <TopFoods />
            <CustomerReviews />
            <UpcomingEvents />
            <CountdownTimer />
        </div>
    );
};

export default Home;