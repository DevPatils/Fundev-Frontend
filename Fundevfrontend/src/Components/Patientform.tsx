// src/components/PatentForm.tsx
import React, { useState } from 'react';
import { submitPatent } from '../assets/Services/PatientService';

interface PatentFormData {
    title: string;
    description: string;
    inventorName: string;
    filingDate: string;
}

const PatentForm: React.FC = () => {
    const [formData, setFormData] = useState<PatentFormData>({
        title: '',
        description: '',
        inventorName: '',
        filingDate: '',
    });
    const [message, setMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const result = await submitPatent(formData);
            setMessage('Patent application registered successfully.');
            setFormData({
                title: '',
                description: '',
                inventorName: '',
                filingDate: '',
            });
        } catch (error) {
            setMessage('Failed to submit patent. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-6 text-center">Patent Application Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Patent Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Patent Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="inventorName" className="block text-sm font-medium text-gray-700">Inventor Name:</label>
                    <input
                        type="text"
                        id="inventorName"
                        name="inventorName"
                        value={formData.inventorName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="filingDate" className="block text-sm font-medium text-gray-700">Filing Date:</label>
                    <input
                        type="date"
                        id="filingDate"
                        name="filingDate"
                        value={formData.filingDate}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-4 py-2 font-semibold text-white rounded-md shadow-sm focus:outline-none ${isSubmitting ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors duration-300`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Patent'}
                    </button>
                </div>
                {message && (
                    <div className={`mt-4 text-sm ${isSubmitting ? 'text-gray-700' : 'text-red-600'}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default PatentForm;
