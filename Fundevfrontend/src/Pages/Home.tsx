import React from 'react';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/Footer';
import AutoSwipingCards from '../Components/AutoSwipingCards';
import TopFacilities from '../Components/TopFacilities';
import StartupContentBox from '../Components/StartupConetentBox';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <BottomNavbar />

      <main className="p-6">
        <div className="flex flex-row border items-center border-gray-300 p-4 rounded-lg mb-6">
          <div className="w-4/5 pr-4">
            <AutoSwipingCards />
          </div>
          <div className="w-1/5">
            <TopFacilities />
          </div>
        </div>

        <StartupContentBox />

        {/* Patent Management Section */}
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
