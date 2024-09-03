import React from 'react';

const TopNavbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 px-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex-none">
          <span className="text-lg font-semibold">Government of India</span>
        </div>

        {/* Center */}
        <div className="flex-grow text-center">
          <span className="text-lg font-semibold">StartUp Gujarat</span>
        </div>

        {/* Right */}
        <div className="flex-none">
          <div className="numbers">
            <h1>Office Time : 10:30 AM to 5:30 PM</h1>
            <span className="text-lg font-semibold">Toll-Free Number: 1800-123-4567</span>



          </div>

        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
