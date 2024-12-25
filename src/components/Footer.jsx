// import React from 'react';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="banner">
//           <div className="left">Food Kingdom</div>
//           <div className="right">
//             <p>Z6 Gulshan-e-Maymar, Karachi</p>
//             <p>Open: 05:00 PM - 12:00 AM</p>
//           </div>
//         </div>
//         <div className="banner">
//           <div className="left">
//             <p>Developed By CODEWITHZEESHU</p>
//           </div>
//           <div className="right">
//             <p>All Rights Reserved By CodeWithZeeshu.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-[#313131] py-10 pl-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-[#313131] text-xl font-semibold mb-4">About Food Kingdom</h3>
          <p className="text-[#313131]">
            Welcome to Food Kingdom, where culinary dreams come true! Explore a wide range of dishes crafted with love and the finest ingredients.
          </p>
        </div>

        
        <div>
          <h3 className="text-[#313131] text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/home" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/all-foods" className="hover:text-red-500">All Foods</Link></li>
            <li><Link to="/gallery" className="hover:text-red-500">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-[#313131] text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">123 Culinary Street, Food City</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Email: info@foodkingdom.com</p>
        </div>

        
        <div>
          <h3 className="text-[#313131] text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaFacebook />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaInstagram />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaTwitter />
            </Link>
            <Link to="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Food Kingdom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
