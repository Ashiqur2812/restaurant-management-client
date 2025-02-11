import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const {
        foodName,
        foodImage,
        foodCategory,
        quantity,
        price,
        foodOrigin,
        description,
        _id,
        purchaseCount
    } = food || {};

    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full max-w-sm bg-gradient-to-r from-emerald-400 to-sky-500 rounded-xl transition-all duration-500 ease-in-out hover:shadow-lg">
                <div className="bg-gray-900 rounded-xl p-4 h-[29rem] transition-transform duration-200 hover:scale-95 overflow-hidden">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-44 object-cover rounded-lg"
                    />
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">{foodName}</h3>
                        <p className="text-sm text-gray-400">Category: {foodCategory}</p>
                        <p className="text-sm text-gray-400">Origin: {foodOrigin}</p>
                        <p className="text-sm text-gray-400">Quantity: {quantity}</p>
                        <p className="text-sm text-gray-400">Price: ${price}</p>
                        <p className="text-sm text-gray-400">Total Purchase: {purchaseCount}</p>
                        <p className="text-sm text-gray-300 mt-2">
                            {description.substring(0, 70)}...
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Link to={`/food/${_id}`}>
                            <button className="bg-emerald-400 text-gray-900 px-4 py-2 rounded-md hover:bg-emerald-500 transition-colors duration-300">
                                Details
                            </button>
                        </Link>
                        <Link to={`/purchase/${_id}`}>
                            <button className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors duration-300">
                                Purchase
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
