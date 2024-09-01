import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function OnboardForm({ onClose }: { onClose: () => void }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [industry, setIndustry] = useState('');
    const [fundingGoal, setFundingGoal] = useState('');
    const [logoBase64, setLogoBase64] = useState<string | null>(null); // Store Base64 encoded logo
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Login required!');
            
        }
    }, [navigate]);

    // Convert image file to Base64
    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoBase64(reader.result as string); // Store Base64 data
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset messages
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:3000/api/startup/onboard', {
                name,
                description,
                industry,
                fundingGoal,
                logoBase64, // Send Base64 encoded logo as part of the payload
            }, {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json', // JSON payload
                }
            });

            if (response.status === 201) {
                setSuccess('Startup onboarded successfully!');
                console.log('Startup onboarded:', response.data);
                // Optionally close the form after successful submission
                onClose();
            } else {
                setError(response.data.message || 'Onboarding failed.');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setError(`Error: ${error.response.status} - ${error.response.data.message || 'An error occurred'}`);
            } else {
                setError('An error occurred. Please try again.');
            }
            console.error('Error:', error);
        }
    };

    return (
        <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
            <button
                className="absolute top-2 right-2 text-gray-800"
                onClick={onClose}
            >
                ✖
            </button>
            <h2 className="font-bold text-xl text-gray-800">Onboard Your Startup</h2>
            <p className="text-gray-600 text-sm mt-2">Provide details about your startup</p>

            <form className="my-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="startup-name" className="block text-gray-700">
                        Name
                    </label>
                    <input
                        id="startup-name"
                        placeholder="Your Startup Name"
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startup-description" className="block text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="startup-description"
                        placeholder="Brief description of your startup"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startup-industry" className="block text-gray-700">
                        Industry
                    </label>
                    <input
                        id="startup-industry"
                        placeholder="Industry of your startup"
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startup-funding-goal" className="block text-gray-700">
                        Funding Goal
                    </label>
                    <input
                        id="startup-funding-goal"
                        placeholder="Funding goal in USD"
                        type="number"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={fundingGoal}
                        onChange={(e) => setFundingGoal(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="startup-logo" className="block text-gray-700">
                        Logo
                    </label>
                    <input
                        id="startup-logo"
                        type="file"
                        accept="image/*"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        onChange={handleLogoChange}
                    />
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <button
                    className="bg-blue-600 text-white rounded-md h-10 w-full font-medium"
                    type="submit"
                >
                    Onboard Startup
                </button>
            </form>
        </div>
    );
}

export default OnboardForm;
