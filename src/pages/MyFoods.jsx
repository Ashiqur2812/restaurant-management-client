import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import 'animate.css'; // Import Animate.css for animations
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyFoods = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetchAllFoods();
    }, [user]);

    const fetchAllFoods = async () => {
        const { data } = await axiosSecure.get(`/foods/${user?.email}`, { withCredentials: true });
        setFoods(data);
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/food/${id}`);
            Swal.fire({
                title: "Food deleted successfully!!!",
                icon: "success",
                draggable: true
            });
            // console.log(data);
            fetchAllFoods();
        } catch (error) {
            // console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                draggable: true
            });
        }
    };

    return (
        <div className='bg-white min-h-[calc(100vh-306px)]'>
            <div className="container mx-auto p-4">
                <div className='flex items-center gap-x-3 mb-6'>
                    <div className='animate__animated animate__fadeIn'>
                        <h1 className="text-3xl font-bold text-center text-gray-800">My Foods</h1>
                    </div>
                    <div className='mt-1'>
                        <span className='px-3 py-1 text-xs text-pink-600 bg-pink-100 rounded-xl text-center'>{foods.length} Food</span>
                    </div>
                </div>
                <div className="overflow-x-auto animate__animated animate__fadeIn">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Food Image</th>
                                <th className="border border-gray-300 px-4 py-2">Food Name</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Food Category</th>
                                <th className="border border-gray-300 px-4 py-2">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foods.map(food => (
                                    <tr key={food._id} className='text-center hover:bg-gray-100 transition-all'>
                                        <td className='border py-3'>
                                            <img src={food.foodImage} alt={food.foodName} className="w-20 h-20 object-cover rounded-full mx-auto" />
                                        </td>
                                        <td className='border py-3'>
                                            {food.foodName}
                                        </td>
                                        <td className='border py-3'>
                                            ${food.price}
                                        </td>
                                        <td className='border'>
                                            <p className={`py-1 mx-5 text-sm ${food.foodCategory === 'Starter' && 'text-red-600 bg-red-100 rounded-full'} ${food.foodCategory === 'Main Course' && 'text-teal-600 bg-teal-100 rounded-full'}
                                            ${food.foodCategory === 'Dessert' && 'text-violet-600 bg-violet-100 rounded-full'}
                                            ${food.foodCategory === 'Beverage' && 'text-yellow-600 bg-yellow-100 rounded-full'}`}>{food.foodCategory}</p>
                                        </td>
                                        <td className='border py-3'>
                                            <div className='flex gap-3 items-center justify-center'>
                                                <Link to={`/update/${food._id}`} className="hover:text-blue-500 transition-colors">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 hover:text-blue-500">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoods;
