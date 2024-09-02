import React from 'react';
import SchemeAndSupport from '../Components/Schemeandsupport';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/Footer';
import FundingCard from '../Components/FundingSchemeCard';

const Schemes: React.FC = () => {
  const schemes = [
    {
      title: "GUIDELINES FOR ORGANISING ENTREPRENEURSHIP DEVELOPMENT PROGRAMME",
      description: "Assistance to R&D institutions/laboratories set up by State Government or Government of India...",
      pdfLink: "https://drive.google.com/file/d/1wrVIyBtDnX7ef8XeBnBOVi-s6F6yYvRy/view?usp=drive_link",
    },
    {
      title: "Assistance to establish R&D laboratories",
      description: "Assistance to R&D laboratories will be eligible up to 60% of the project cost...",
      pdfLink:"../assets/Scheme_pdf/SH-2.pdf",
    },
    // Add more schemes here
  ];

  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
      <SchemeAndSupport />

      <div className="p-6 bg-grey-100">
        <h2 className="font-extrabold text-2xl mb-6 text-left">Startup Policies</h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center mt-4">
          {schemes.map((scheme, index) => (
            <FundingCard
              key={index}
              title={scheme.title}
              description={scheme.description}
              pdfLink={scheme.pdfLink}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schemes;
