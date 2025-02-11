import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../providers/AuthProvider';
import foodBackground from '../assets/banners.png'; // Add a food-themed background image
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const FoodPurchase = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    
    const handlePurchase = async (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const foodId = id;
        // console.log(foodId);

        if (quantity === 0) {
            return Swal.fire({
                icon: "error",
                title: "This item is not available",
                draggable: true
            });
        }

        const purchaseData = {
            foodName,
            price,
            quantity,
            buyer: {
                email: user?.email,
                name: user?.displayName,
            },
            buyingDate: startDate,
            foodId,
        };

        try {
            // 1. make a post request
            const { data } = await axiosSecure.post(
                `/purchase-food`,
                purchaseData, { withCredentials: true });
            form.reset();
            if (data.insertedId) {
                Swal.fire({
                    title: "Food purchase successful!!!",
                    icon: "success",
                    draggable: true
                });
            }
            // console.log(data);
            navigate('/my-orders');
        } catch (err) {
            // console.log(err.message);
            Swal.fire({
                icon: "error",
                title: "You have already purchased!!!",
                draggable: true
            });
        }
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-20"
            style={{
                backgroundImage: `url(${foodBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 bg-opacity-60"></div>

            {/* Blurred Card */}
            <div className="relative z-10 backdrop-blur-sm bg-white bg-opacity-30 rounded-lg shadow-2xl max-w-lg w-full p-8 sm:p-12 animate-fade-in">
                <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">
                    Purchase Food
                </h1>
                <form onSubmit={handlePurchase} className="space-y-6 ">
                    {/* Food Name */}
                    <div>
                        <label className="block text-gray-200 font-semibold mb-2">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            // readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-200 font-semibold mb-2">Price</label>
                        <input
                            type="text"
                            name="price"
                            // readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-gray-200 font-semibold mb-2">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
                        />
                    </div>

                    {/* Buyer Name */}
                    <div>
                        <label className="block text-gray-200 font-semibold mb-2">Buyer Name</label>
                        <input
                            type="text"
                            defaultValue={user?.displayName || 'Anonymous'}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
                        />
                    </div>

                    {/* Buyer Email */}
                    <div>
                        <label className="block text-gray-200 font-semibold mb-2">Buyer Email</label>
                        <input
                            type="email"
                            defaultValue={user?.email || 'Not Available'}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
                        />
                    </div>

                    {/* Buying Date */}
                    <div>
                        <label className="block text-gray-200 font-semibold mb-2">Buying Date</label>
                        <DatePicker
                            className="w-full border px-4 py-2 rounded-md bg-gray-100 bg-opacity-50 text-gray-700"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                    >
                        <span
                            className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                        ></span>
                        <span
                            className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                        ></span>
                        Purchase
                    </button>

                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;





// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { AuthContext } from '../providers/AuthProvider';
// import foodBackground from '../assets/banners.png';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const FoodPurchase = () => {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [startDate, setStartDate] = useState(new Date());
//     const [availableQuantity, setAvailableQuantity] = useState(0);
//     const [foodOwner, setFoodOwner] = useState('');
//     const [isDisabled, setIsDisabled] = useState(false);

//     // Fetch food details (e.g., available quantity and owner) from the server
//     useEffect(() => {
//         const fetchFoodDetails = async () => {
//             try {
//                 const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food-details`);
//                 setAvailableQuantity(data.availableQuantity);
//                 setFoodOwner(data.ownerEmail);
//                 if (data.availableQuantity === 0) {
//                     setIsDisabled(true);
//                 }
//             } catch (err) {
//                 console.error('Error fetching food details:', err.message);
//             }
//         };

//         fetchFoodDetails();
//     }, []);

//     const handlePurchase = async (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const foodName = form.foodName.value;
//         const price = form.price.value;
//         const quantity = parseInt(form.quantity.value);

//         // Validation: Prevent buying own food item
//         if (foodOwner === user?.email) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Action not permitted!',
//                 text: 'You cannot purchase your own food item.',
//             });
//         }

//         // Validation: Prevent buying more than available quantity
//         if (quantity > availableQuantity) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Quantity exceeded!',
//                 text: `You cannot purchase more than ${availableQuantity} items.`,
//             });
//         }

//         const purchaseData = {
//             foodName,
//             price,
//             quantity,
//             buyer: {
//                 email: user?.email,
//                 name: user?.displayName,
//             },
//             buyingDate: startDate,
//         };

//         try {
//             // Make a POST request to save the purchase
//             const { data } = await axios.post(
//                 `${import.meta.env.VITE_API_URL}/purchase-food`,
//                 purchaseData
//             );
//             form.reset();
//             if (data.insertedId) {
//                 Swal.fire({
//                     title: 'Food purchased successfully!',
//                     icon: 'success',
//                 });
//                 setAvailableQuantity((prev) => prev - quantity); // Update available quantity
//             }
//         } catch (err) {
//             console.error('Error purchasing food:', err.message);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Something went wrong!',
//             });
//         }
//     };

//     return (
//         <div
//             className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-20"
//             style={{
//                 backgroundImage: `url(${foodBackground})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//             {/* Blurred Card */}
//             <div className="relative z-10 backdrop-blur-sm bg-white bg-opacity-30 rounded-lg shadow-2xl max-w-lg w-full p-8 sm:p-12 animate-fade-in">
//                 <h1 className="text-3xl font-bold text-gray-100 mb-6 text-center">
//                     Purchase Food
//                 </h1>
//                 <form onSubmit={handlePurchase} className="space-y-6">
//                     {/* Food Name */}
//                     <div>
//                         <label className="block text-gray-200 font-semibold mb-2">Food Name</label>
//                         <input
//                             type="text"
//                             name="foodName"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
//                         />
//                     </div>

//                     {/* Price */}
//                     <div>
//                         <label className="block text-gray-200 font-semibold mb-2">Price</label>
//                         <input
//                             type="text"
//                             name="price"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
//                         />
//                     </div>

//                     {/* Quantity */}
//                     <div>
//                         <label className="block text-gray-200 font-semibold mb-2">
//                             Quantity (Available: {availableQuantity})
//                         </label>
//                         <input
//                             type="number"
//                             name="quantity"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
//                             max={availableQuantity}
//                             disabled={isDisabled}
//                         />
//                     </div>

//                     {/* Buyer Name */}
//                     <div>
//                         <label className="block text-gray-200 font-semibold mb-2">Buyer Name</label>
//                         <input
//                             type="text"
//                             defaultValue={user?.displayName || 'Anonymous'}
//                             readOnly
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
//                         />
//                     </div>

//                     {/* Buyer Email */}
//                     <div>
//                         <label className="block text-gray-200 font-semibold mb-2">Buyer Email</label>
//                         <input
//                             type="email"
//                             defaultValue={user?.email || 'Not Available'}
//                             readOnly
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 bg-opacity-50 text-gray-700"
//                         />
//                     </div>

//                     {/* Buying Date */}
//                     <div>
//                         <label className="block text-gray-200 font-semibold mb-2">Buying Date</label>
//                         <DatePicker
//                             className="w-full border px-4 py-2 rounded-md bg-gray-100 bg-opacity-50 text-gray-700"
//                             selected={startDate}
//                             onChange={(date) => setStartDate(date)}
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         disabled={isDisabled}
//                         className={`text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''
//                             }`}
//                     >
//                         Purchase
//                     </button>

//                     {/* Unavailable Message */}
//                     {isDisabled && (
//                         <p className="text-red-500 text-center mt-4">
//                             This item is not available for purchase.
//                         </p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FoodPurchase;
