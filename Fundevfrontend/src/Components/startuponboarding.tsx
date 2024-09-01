import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
export function OnboardForm({ onClose }: { onClose: () => void }) { // Receive onClose as a prop
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [industry, setIndustry] = useState('');
    const [fundingGoal, setFundingGoal] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialize navigate for redirection
 // Access backend URL from .env
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Login required!');
            
        }
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://fundev-backend.onrender.com/api/startup/onboard', {
                name,
                description,
                industry,
                fundingGoal,
            }, {
                headers: { 'auth-token': localStorage.getItem('token') }  // Include the JWT token in the headers
            });

            if (response.status === 201) {
                setSuccess('Startup onboarded successfully!');
                console.log('Startup onboarded:', response.data);
            } else {
                setError(response.data.message || 'Onboarding failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-md bg-white">
            <button
                className="absolute top-2 right-2 text-gray-800"
                onClick={onClose} // Close the form when button is clicked
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