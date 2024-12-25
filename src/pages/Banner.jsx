import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banners.png'
const Banner = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/all-foods'); 
    };

    return (
        <div className="relative">
            <img
                src={banner} 
                alt="Food Kingdom Banner"
                className="w-full h-[40rem] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-80 bg-black bg-opacity-50 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Food Kingdom</h1>
                <p className="text-lg md:text-xl mb-6">
                    Discover the best dishes from around the world.
                </p>
                <button
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
                    onClick={handleRedirect}
                >
                    Explore All Foods
                </button>
            </div>
        </div>
    );
};

export default Banner;
