import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import image from '../assets/banner.jpg';

const FoodDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchFoodData();
    }, [id]);

    const fetchFoodData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`);
        setFood(data);
    };

    const { foodName, foodImage, foodCategory, quantity, price, foodOrigin, description, purchaseCount, _id, buyer } = food || {};

    const handleNavigate = () => {
        return navigate(-1);
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 backdrop-blur-md shadow-2xl rounded-lg max-w-5xl p-6 sm:p-10 text-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                    <div className="flex items-center justify-center">
                        <img
                            src={foodImage}
                            alt={foodName}
                            className="rounded-lg shadow-lg max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">{foodName}</h1>
                            <p className="text-gray-300 text-xl mb-2">
                                <span className="font-semibold">Category:</span> {foodCategory}
                            </p>
                            <p className="text-gray-300 text-xl mb-2">
                                <span className="font-semibold">Origin:</span> {foodOrigin || 'Unknown'}
                            </p>
                            <p className="text-gray-300 text-xl mb-2">
                                <span className="font-semibold">Quantity:</span> {quantity || 'N/A'}
                            </p>
                            <p className="text-gray-300 text-xl mb-2">
                                <span className="font-semibold">Price:</span> ${price}
                            </p>
                            <p className="text-gray-300 text-xl mb-2">
                                <span className="font-semibold">Purchase:</span> {purchaseCount}
                            </p>
                            <p className="text-gray-200 mt-4 text-lg">
                                <span className="font-semibold">Description:</span> {description}
                            </p>
                        </div>
                        <div className="mt-6">
                            <button onClick={handleNavigate}
                                type="button"
                                class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold border-4 border-white group"
                            >
                                <div
                                    class="bg-green-400 rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500"
                                >
                                    <svg
                                        width="25px"
                                        height="25px"
                                        viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#000000"
                                            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                        ></path>
                                        <path
                                            fill="#000000"
                                            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                        ></path>
                                    </svg>
                                </div>
                                <p class="translate-x-4">Go Back</p>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
