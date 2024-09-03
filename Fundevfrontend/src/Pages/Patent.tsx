import React from 'react';

import PatentList from '../Components/PatentList';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/Footer';

const PatentPage: React.FC = () => {
    return (
        <>
        <TopNavbar />
        <BottomNavbar />
        <div className="p-6">
            
            
            <PatentList />
        </div>
        <Footer />
        </>
    );
};

export default PatentPage;
