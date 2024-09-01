import React from 'react';

const TopFacilities: React.FC = () => {
    const facilities = [
        'apply for patent',
        'funding',
        'mentors',
        'Know schemes',
        'Ipr status',
    ];

    return (
        <div className="border border-gray-500 rounded-lg w-64 p-4">
            <h2 className="text-center font-bold mb-4">Top Facilities</h2>
            <div className="flex flex-col gap-2">
                {facilities.map((facility, index) => (
                    <button
                        key={index}
                        className="border border-gray-400 py-2 text-left px-4 rounded hover:bg-gray-200"
                    >
                        {facility}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopFacilities;