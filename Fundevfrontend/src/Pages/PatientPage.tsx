import React from 'react';
import PatentForm from '../Components/Patientform';
import PatentList from '../Components/Patientlist';

const PatentPage: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Patent Management</h1>
            <PatentForm />
            <PatentList />
        </div>
    );
};

export default PatentPage;
