// src/Components/FilterCard.tsx
import { useState } from 'react';

interface FilterCardProps {
    onFilterChange: (industry: string | null) => void;
    industries: string[];
}

const FilterCard: React.FC<FilterCardProps> = ({ onFilterChange, industries }) => {
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

    const handleIndustryChange = (industry: string | null) => {
        setSelectedIndustry(industry);
        onFilterChange(industry);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs">
            <h2 className="text-lg font-semibold mb-4">Industry Filter</h2>
            <div className="space-y-2">
                <button
                    onClick={() => handleIndustryChange(null)}
                    className={`block w-full text-left px-4 py-2 rounded-md ${selectedIndustry === null ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
                >
                    All Industries
                </button>
                {industries.map((industry) => (
                    <button
                        key={industry}
                        onClick={() => handleIndustryChange(industry)}
                        className={`block w-full text-left px-4 py-2 rounded-md ${selectedIndustry === industry ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
                    >
                        {industry}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterCard;
