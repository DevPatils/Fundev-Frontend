import React from 'react';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/Footer';
import AutoSwipingCards from '../Components/AutoSwipingCards';
import TopFacilities from '../Components/TopFacilities';
import StartupContentBox from '../Components/StartupConetentBox';
import PatentForm from '../Components/Patientform'; // Import the PatentForm component
import PatentList from '../Components/Patientlist'; // Import the PatentList component

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
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Patent Management</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <PatentForm />
            </div>
            <div className="lg:w-1/2">
              <PatentList />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
