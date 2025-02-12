import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReviews = () => {
    const reviews = [
        { id: 1, name: 'John Doe', comment: 'The best restaurant in town! The food is amazing and the service is top-notch.', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Jane Smith', comment: 'Absolutely loved the sushi platter. Highly recommended!', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, name: 'Mike Johnson', comment: 'Great ambiance and delicious food. Will definitely come back!', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <div className="py-16 shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
                What Our Customers Say
            </h2>
            <Slider {...settings} className="px-4 mx-6 md:mx-0">
                {reviews.map(review => (
                    <div key={review.id} className="text-center px-8">
                        <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold">{review.name}</h3>
                        <p className="text-lg">{review.comment}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomerReviews;