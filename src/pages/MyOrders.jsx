import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'animate.css';
import OrderTable from '../components/OrderTable';
import { AuthContext } from '../providers/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetchAllFoods();
    }, [user]);

    const fetchAllFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-orders/${user?.email}`, { withCredentials: true });
        setOrder(data);
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/food/${id}`);
            Swal.fire({
                title: "Food deleted successfully!!!",
                icon: "success",
                draggable: true
            });
            console.log(data);
            fetchAllFoods();
        } catch (error) {
            console.log(error.message);
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
                        <h1 className="text-3xl font-bold text-center text-gray-800">My Orders</h1>
                    </div>
                    <div className='mt-1'>
                        <span className='px-3 py-1 text-xs text-pink-600 bg-pink-100 rounded-xl text-center'>{order.length} Orders</span>
                    </div>
                </div>
                <div className="overflow-x-auto animate__animated animate__fadeIn">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Food Info</th>
                                <th className="border border-gray-300 px-4 py-2">Buying Date</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map(order => <OrderTable key={order._id} order={order} handleDelete={handleDelete} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;



// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../providers/AuthProvider';
// import 'animate.css';
// import foodBackground from '../assets/best-restaurant-websites-design-2024.jpg'
// import OrderTable from '../components/OrderTable';

// const MyOrders = () => {
//     const { user } = useContext(AuthContext);
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetchAllFoods();
//     }, [user]);

//     const fetchAllFoods = async () => {
//         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-orders/${user?.email}`);
//         setOrders(data);
//     };

//     const handleDelete = async (id) => {
//         try {
//             const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/food/${id}`);
//             Swal.fire({
//                 title: "Food deleted successfully!!!",
//                 icon: "success",
//                 draggable: true
//             });
//             console.log(data);
//             fetchAllFoods();
//         } catch (error) {
//             console.log(error.message);
//             Swal.fire({
//                 icon: "error",
//                 title: "Something went wrong!",
//                 draggable: true
//             });
//         }
//     };

//     return (
//         <div
//             className="min-h-fit bg-cover bg-center"
//             style={{backgroundImage: `url(${foodBackground})` }}
//         >
//             <div className="bg-white/80 min-h-[calc(100vh-306px)] backdrop-blur-md">
//                 <div className="container mx-auto p-6">
//                     <div className="flex items-center gap-x-3 mb-6">
//                         <div className="animate__animated animate__fadeIn">
//                             <h1 className="text-4xl font-extrabold text-center text-gray-800">My Foods</h1>
//                         </div>
//                         <div className="mt-1">
//                             <span className="px-4 py-2 text-sm text-white bg-pink-600 rounded-full shadow-lg">
//                                 {orders.length} Orders
//                             </span>
//                         </div>
//                     </div>
//                     <div className="overflow-x-auto animate__animated animate__fadeIn">
//                         <table className="table-auto w-full border-collapse rounded-lg shadow-lg backdrop-blur-lg bg-white/50">
//                             <thead className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
//                                 <tr>
//                                     <th className="border border-gray-200 px-6 py-4 text-left">Food Info</th>
//                                     <th className="border border-gray-200 px-6 py-4 text-left">Buying Date</th>
//                                     <th className="border border-gray-200 px-6 py-4 text-left">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-700">
//                                 {orders.map((order) => <OrderTable key={order._id} order={order}/>)}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyOrders;
