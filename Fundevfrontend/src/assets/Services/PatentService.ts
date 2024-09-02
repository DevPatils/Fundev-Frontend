// src/services/patentService.ts
const API_BASE_URL = 'https://fundev-backend.onrender.com'; // Adjust this based on your backend URL
// const API_BASE_URL='http://localhost:3000';

export const fetchAllPatents = async () => {
    const response = await fetch(`${API_BASE_URL}/api/patent/getAllPatents`);
    if (!response.ok) {
        throw new Error('Failed to fetch patents');
    }
    return response.json();
};

export const submitPatent = async (patentData: {
    title: string;
    description: string;
    inventorName: string;
    filingDate: string;
}) => {
    const response = await fetch(`${API_BASE_URL}/api/patent/file-patent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${getAuthToken()}` // Implement token retrieval
        },
        body: JSON.stringify(patentData),
    });

    if (!response.ok) {
        throw new Error('Failed to submit patent');
    }
    return response.json();
};



const getAuthToken = () => {
    return localStorage.getItem('token');
};
