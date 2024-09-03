import React, { useEffect, useState } from 'react';
import { fetchAllPatents } from '../assets/Services/PatentService';
import PatentForm from './PatentForm';

const PatentList: React.FC = () => {
    interface Patent {
        id: number;
        title: string;
        description: string;
        inventorName: string;
        filingDate: string;
        status?: string;
    }

    const [patents, setPatents] = useState<Patent[]>([]);
    const [error, setError] = useState<string>('');
    const [showPatentForm, setShowPatentForm] = useState(false);

    useEffect(() => {
        const getPatents = async () => {
            try {
                const result = await fetchAllPatents();
                setPatents(result.patents);
            } catch (error) {
                setError('Failed to load patents.');
                console.log(error);
            }
        };

        getPatents();
    }, []);

    const handleApplyForPatent = () => {
        setShowPatentForm(true);
    };

    const closePatentForm = () => {
        setShowPatentForm(false);
    };

    return (
        <div className="relative max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Patents List</h1>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={handleApplyForPatent}
                >
                    Apply for Patent
                </button>
            </div>
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

            {showPatentForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closePatentForm}
                            aria-label="Close"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <PatentForm onClose={closePatentForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatentList;
