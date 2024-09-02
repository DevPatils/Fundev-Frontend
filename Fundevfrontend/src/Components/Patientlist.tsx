// src/components/PatentList.tsx
import React, { useEffect, useState } from 'react';
import { fetchAllPatents } from '../assets/Services/PatientService';

const PatentList: React.FC = () => {
    const [patents, setPatents] = useState<any[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getPatents = async () => {
            try {
                const result = await fetchAllPatents();
                setPatents(result.patents);
            } catch (error) {
                setError('Failed to load patents.');
            }
        };

        getPatents();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-6 text-center">Patents List</h1>
            {error && <p className="text-red-600 text-center">{error}</p>}
            <ul className="space-y-4">
                {patents.map(patent => (
                    <li key={patent.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
                        <h2 className="text-xl font-semibold">{patent.title}</h2>
                        <p className="mt-2">{patent.description}</p>
                        <p className="mt-2"><strong>Inventor:</strong> {patent.inventorName}</p>
                        <p className="mt-2"><strong>Filing Date:</strong> {new Date(patent.filingDate).toLocaleDateString()}</p>
                        <p className="mt-2"><strong>Status:</strong> {patent.status || 'Pending'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatentList;
