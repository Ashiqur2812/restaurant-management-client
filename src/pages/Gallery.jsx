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
        <div className="min-h-screen bg-gray-100 py-20 px-4">
            <h1 className="text-2xl md:text-5xl font-bold text-center text-gray-800 mb-8">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image}
                        large={image}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image1}
                        large={image1}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image2}
                        large={image2}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image3}
                        large={image3}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image4}
                        large={image4}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image5}
                        large={image5}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image6}
                        large={image6}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image7}
                        large={image7}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image8}
                        large={image8}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image9}
                        large={image9}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image10}
                        large={image10}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <ModalImage
                        small={image11}
                        large={image11}
                        alt={`Gallery Image `}
                        className="cursor-pointer w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
