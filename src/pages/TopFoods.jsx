import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "./FoodCard";
import axios from "axios";

const TopFoods = () => {
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetchAllFoods();
    }, []);

    const fetchAllFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
        setFoods(data);
    };

    console.log(foods);

    const handleNavigate = () => {
        navigate("/all-foods");
    };

    return (
        <div className="px-4 md:px-20 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Top Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    foods.slice(0, 6).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-8">
                <button onClick={handleNavigate} className="relative px-8 py-3 text-lg font-semibold text-white bg-black rounded-lg overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 transition-transform duration-500 transform scale-0 group-hover:scale-100"></span>
                    <span className="relative z-10">See All</span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 blur-lg opacity-50 transition-opacity duration-500 group-hover:opacity-100"></span>
                </button>
            </div>
        </div>
    );
};

export default TopFoods;
