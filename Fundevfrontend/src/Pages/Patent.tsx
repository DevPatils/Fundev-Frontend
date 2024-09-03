import React from 'react';
import PatentForm from '../Components/PatentForm';
import PatentList from '../Components/PatentList';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';

const PatentPage: React.FC = () => {
    return (
        <div className="p-6">
            <TopNavbar />
            <BottomNavbar />
            <h1 className="text-3xl font-bold text-center mb-8">Patent Management</h1>
            <PatentForm />
            <PatentList />
        </div>
    );
};

export default PatentPage;
