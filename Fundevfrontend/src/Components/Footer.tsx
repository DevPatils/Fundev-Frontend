import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-center fixed bottom-0 left-0 w-full box-border">
      <h1 className="text-xl font-bold mb-2">Contact Us</h1>
      <div className="info flex flex-col sm:flex-row justify-center gap-10 mb-4">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-lg" />
          <span>Address: Vadodara , Gujarat</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lg" />
          <span>Phone: +1 234 567 890</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lg" />
          <span>Email: contact@example.com</span>
        </div>
      </div>
      <p className="text-base">
        © 2024 Government of Gujarat. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
