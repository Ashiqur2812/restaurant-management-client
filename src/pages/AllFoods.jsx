import React, { useEffect, useState } from 'react';
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
    }, [filter]);

    const handleReset = () => {
        setFilter('');
        setSearch('');
    };

    return (
        <>
            <div className=''>
                <h1 className="text-4xl text-center font-bold mt-5">All Foods </h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-8'>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                            onChange={e => setFilter(e.target.value)}
                            value={filter}
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
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            placeholder='Enter Food Name'
                            aria-label='Enter Food Name'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                    <button onClick={handleReset} type='reset' className='btn'>
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