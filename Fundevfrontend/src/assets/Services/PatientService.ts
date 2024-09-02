// src/services/patentService.ts
const API_BASE_URL = 'https://fundev-backend.onrender.com'; // Adjust this based on your backend URL

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
    const response = await fetch(`${API_BASE_URL}/file-patent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}` // Implement token retrieval
        },
        body: JSON.stringify(patentData),
    });

    if (!response.ok) {
        throw new Error('Failed to submit patent');
    }
    return response.json();
};

export const updatePatentStatus = async (id: number, status: string) => {
    const response = await fetch(`${API_BASE_URL}/update-patent/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}` // Implement token retrieval
        },
        body: JSON.stringify({ status }),
    });

    if (!response.ok) {
        throw new Error('Failed to update patent status');
    }
    return response.json();
};

const getAuthToken = () => {
    // Implement token retrieval logic here
    return 'your-auth-token'; // Example placeholder
};
