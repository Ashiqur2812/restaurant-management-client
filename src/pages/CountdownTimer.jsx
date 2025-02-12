import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2025-12-31T23:59:59').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-16 shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center  mb-8 animate__animated animate__fadeInDown">
                Limited Time Offer!
            </h2>
            <div className="flex justify-center space-x-4 animate-pulse">
                <div className="text-center">
                    <div className="text-2xl lg:text-6xl font-bold ">{timeLeft.days}</div>
                    <div className="text-lg ">Days</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl lg:text-6xl font-bold ">{timeLeft.hours}</div>
                    <div className="text-lg">Hours</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl lg:text-6xl font-bold  ">{timeLeft.minutes}</div>
                    <div className="text-lg ">Minutes</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl lg:text-6xl font-bold ">{timeLeft.seconds}</div>
                    <div className="text-lg ">Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;