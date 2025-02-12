import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FoodCard from './FoodCard';
import axios from 'axios';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchAllFoods = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods?filter=${filter}&search=${search}`);
            setFoods(data);
        };
        fetchAllFoods();
    }, [filter, search]);

    const handleReset = () => {
        setFilter('');
        setSearch('');
    };

    return (
        <>
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-40"
            >
                <h1 className="text-4xl text-center font-bold mb-4">All Foods 🍔🍕🍰</h1>
                <p className="text-lg text-center text-gray-600">Explore our delicious menu and find your favorite dishes! 🍴</p>
            </motion.div>

            {/* Filter and Search Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8 px-4"
            >
                {/* Filter Dropdown */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <select
                        name="category"
                        id="category"
                        className="border p-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={e => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option>Filter By Category</option>
                        <option value="Starter">Starter 🥗</option>
                        <option value="Main Course">Main Course 🍛</option>
                        <option value="Dessert">Dessert 🍰</option>
                        <option value="Beverage">Beverage 🥤</option>
                    </select>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex p-1 overflow-hidden border rounded-lg bg-white shadow-md focus-within:ring-2 focus-within:ring-blue-400"
                >
                    <input
                        className="px-6 py-2 text-gray-700 placeholder-gray-500 outline-none flex-1"
                        type="text"
                        name="search"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        placeholder="Enter Food Name"
                        aria-label="Enter Food Name"
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
                    >
                        Search 🔍
                    </motion.button>
                </motion.div>

                {/* Reset Button */}
                <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-3 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
                >
                    Reset 🔄
                </motion.button>
            </motion.div>

            {/* Food Cards Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-12 my-12"
            >
                {foods.map((food) => (
                    <motion.div
                        key={food._id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FoodCard food={food} />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default AllFoods;