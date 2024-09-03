import React from 'react';
import { Link } from 'react-router-dom';

const TopFacilities: React.FC = () => {
    const facilities = {
        '/patents': 'Apply for Patent',
        '/funding': 'Get Funding for startup',
        '/schemes': 'Know Schemes',
        '/invest': 'Invest in Startups',
    };

    return (
        <div className="border border-gray-500 rounded-lg w-64 p-4 bg-yellow-50">
            <div className="flex justify-center">
                <h2 className="text-center font-bold mb-4">Top Facilities</h2>
            </div>
            <div className="flex flex-col space-y-2">
                {Object.entries(facilities).map(([route, label], index) => (
                    <Link to={route} key={index}>
                        <button
                            className="border bg-white border-gray-400 py-2 text-left font-semibold px-4 rounded hover:bg-gray-200 w-full"
                        >
                            {label}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopFacilities;