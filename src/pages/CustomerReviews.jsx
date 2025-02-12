import { motion } from "framer-motion";

const CustomerReviews = () => {
    const reviews = [
        { id: 1, name: "John Doe", rating: 5, comment: "Amazing food and great service!" },
        { id: 2, name: "Jane Smith", rating: 4, comment: "Loved the ambiance and the dishes." },
        { id: 3, name: "Alice Johnson", rating: 5, comment: "The best restaurant in town!" },
    ];

    return (
        <div className="py-12 bg-white lg:mx-6">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say 🌟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-200 p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-center mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                        <p className="mt-4 text-gray-900 font-semibold">- {review.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;