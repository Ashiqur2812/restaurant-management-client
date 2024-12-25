import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import foodBackground from '../assets/sandwich.png';
import Swal from 'sweetalert2';

const UpdateFood = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;

        const foodData =
        {
            foodName,
            foodImage,
            foodCategory,
            quantity,
            price,
            buyer: {
                email: user?.email,
                name: user?.displayName
            },
            foodOrigin,
            description,
            purchaseCount: food?.purchaseCount
        };

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update-food`, foodData);
            form.reset();
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Food updated successfully!!!",
                    icon: "success",
                    draggable: true
                });
            }
            navigate('/my-foods');
        } catch (error) {
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                draggable: true
            });
        }
        console.table({ foodData });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center my-24">
            <div
                className="relative bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-lg p-8 md:p-12 w-full max-w-4xl"
                style={{
                    backgroundImage: `url(${foodBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "2px solid #ccc",
                }}
            >
                <h2 className="text-2xl md:text-5xl text-black font-bold text-center  mb-6">
                    Update a New Food Item
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Food Name */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Food Name
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            defaultValue={food?.foodName}
                            placeholder="Enter the food name"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Food Image */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Food Image URL
                        </label>
                        <input
                            type="url"
                            name="foodImage"
                            defaultValue={food?.foodImage}
                            placeholder="Enter the image URL"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Food Category */}
                    {food?.foodCategory && (<div>
                        <label className="block text-lg font-medium text-gray-700">
                            Food Category
                        </label>
                        <select
                            name="foodCategory"
                            defaultValue={food?.foodCategory}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Starter">Starter</option>
                            <option value="Main Course">Main Course</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Beverage">Beverage</option>
                        </select>
                    </div>)}

                    {/* Quantity */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            defaultValue={food?.quantity}
                            placeholder="Enter the quantity"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={food?.price}
                            placeholder="Enter the price"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Food Origin */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Food Origin (Country)
                        </label>
                        <input
                            type="text"
                            name="foodOrigin"
                            defaultValue={food?.foodOrigin}
                            placeholder="Enter the country of origin"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Short Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={food?.description}
                            placeholder="Enter a short description of the food item (ingredients, making procedure, etc.)"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Add By (Read-Only Fields) */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-lg font-medium text-gray-700">
                                Added By (Name)
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                disabled
                                className="w-full p-3 border rounded-lg bg-gray-100"
                                readOnly
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-lg font-medium text-gray-700">
                                Added By (Email)
                            </label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                disabled
                                className="w-full p-3 border rounded-lg bg-gray-100"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;