import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'animate.css';
import OrderTable from '../components/OrderTable';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyOrders = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetchAllFoods();
    }, [user]);

    const fetchAllFoods = async () => {
        const { data } = await axiosSecure.get(`/my-orders/${user?.email}`, { withCredentials: true });
        setOrder(data);
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            showClass: {
                popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/food/${id}`);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your order has been deleted.",
                        icon: "success",
                        showClass: {
                            popup: 'animate__animated animate__bounceIn'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOut'
                        }
                    });
                    fetchAllFoods(); // Refresh the list after deletion
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Something went wrong!",
                        text: error.message,
                        showClass: {
                            popup: 'animate__animated animate__shakeX'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOut'
                        }
                    });
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "Your order is safe :)",
                    icon: "info",
                    showClass: {
                        popup: 'animate__animated animate__bounceIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            }
        });
    };

    return (
        <div className='min-h-[calc(100vh-306px)]'>
            <div className="container mx-auto p-8">
                <div className='flex items-center gap-x-3 mb-6 animate__animated animate__fadeIn'>
                    <h1 className="text-3xl font-bold text-center hover:text-rose-500 transition-colors duration-300">
                        My Orders
                    </h1>
                    <span className='px-3 py-1 text-xs text-pink-600 bg-pink-100 rounded-xl text-center animate__animated animate__bounceIn'>
                        {order.length} Order{order.length !== 1 ? 's' : ''}
                    </span>
                </div>
                <div className="overflow-x-auto animate__animated animate__fadeIn">
                    <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Food Info</th>
                                <th className="border border-gray-300 px-4 py-2">Buying Date</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map(order => (
                                <OrderTable key={order._id} order={order} handleDelete={handleDelete} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;