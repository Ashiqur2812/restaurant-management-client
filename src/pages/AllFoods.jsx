import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import axios from 'axios';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetchAllFoods();
    }, []);

    const fetchAllFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
        setFoods(data);
    };

    console.log(foods);

    return (
        <>
            <div className=''>
                <h1 className="text-4xl text-center font-bold mt-5">All Foods </h1>
                {/* <form class="flex items-center max-w-lg mx-auto mt-4">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                            </svg>
                        </div>
                        <input type="text" id="voice-search" class="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-base-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#313131] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Foods..." />
                        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                            </svg>
                        </button>
                    </div>
                    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>Search
                    </button>
                </form> */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-8'>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                        // onChange={e => setFilter(e.target.value)}
                        // value={filter}
                        >
                            <option value=''>Filter By Category</option>
                            <option value='Starter'>Starter</option>
                            <option value='Main Course'>Main Course</option>
                            <option value='Dessert'>Dessert</option>
                            <option value='Beverage'>Beverage</option>
                        </select>
                    </div>

                    <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            // onChange={e => setSearch(e.target.value)}
                            // value={search}
                            placeholder='Enter Food Name'
                            aria-label='Enter Food Name'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                    <button type='reset' className='btn'>
                        Reset
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 my-12">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </>
    );
};

export default AllFoods;