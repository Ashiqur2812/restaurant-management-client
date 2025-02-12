import React from 'react';
import ModalImage from 'react-modal-image';
import image from '../assets/dinner3.png';
import image1 from '../assets/dinner2.png';
import image2 from '../assets/dinner4.png';
import image3 from '../assets/dinner5.png';
import image4 from '../assets/dinner6.png';
import image5 from '../assets/hero1.png';
import image6 from '../assets/hero2.png';
import image7 from '../assets/lunch1.png';
import image8 from '../assets/sandwich.png';
import image9 from '../assets/whoweare.png';
import image10 from '../assets/about.png';
import image11 from '../assets/breakfast1.png';

const Gallery = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 pt-8 hover:text-rose-500 transition-colors duration-300">
                Gallery
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-12">
                {/* Gallery Items */}
                {[
                    image, image1, image2, image3, image4,
                    image5, image6, image7, image8, image9,
                    image10, image11
                ].map((img, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl transition-shadow duration-300"
                    >
                        <ModalImage
                            small={img}
                            large={img}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-72 sm:h-80 md:h-96 object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold">Image {index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;