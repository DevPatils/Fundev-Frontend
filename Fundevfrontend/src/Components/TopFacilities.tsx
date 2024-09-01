import React from 'react';

const TopFacilities: React.FC = () => {
    const facilities = [
        'Apply for Patent',
        'Funding',
        'Mentors',
        'Know Schemes',
        'Ipr Status',
    ];

    return (
        <div className="border border-gray-500 rounded-lg w-64 p-4 bg-yellow-50">
            <div className='flex justify-center'>
            <h2 className="text-center font-bold mb-4">Top Facilities</h2>
            </div>
            <div className="flex flex-col">
                {facilities.map((facility, index) => (
                    <button
                        key={index}
                        className="border bg-white border-gray-400 py-2 text-left font-semibold px-4 rounded hover:bg-gray-200"
                    >
                        {facility}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopFacilities;