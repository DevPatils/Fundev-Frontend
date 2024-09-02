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
      description: "Guidency and Assistance For Organising ENTREPRENEURSHIP...",
      pdfLink: "https://drive.google.com/file/d/1wrVIyBtDnX7ef8XeBnBOVi-s6F6yYvRy/view?usp=drive_link",
    },
    {
      title: "GUIDELINES FOR ORGANISING HACKATHON",
      description: "Guides to follow rules and understand Problem Statement...",
      pdfLink: "https://drive.google.com/file/d/1zyAGPMFl_9gnnGWysJLIeDR_HmTQW2WB/view?usp=drive_link",
    },
    {
      title: "GUIDELINES FOR ORGANISING IDEATHON",
      description: "These guidelines for organizing an Ideathon require institutions to define problem statements...",
      pdfLink: "https://drive.google.com/file/d/1J5rxTj4n6SN4x1T7dorReOi-2TZl8QCM/view?usp=drive_link",
    },
    {
      title: "GUIDELINES FOR ORGANISING PRODUCT SHOWCASE OPPORTUNITY",
      description: "Guides about Programs should focus on product showcasing opportunities...",
      pdfLink: "https://drive.google.com/file/d/1QgDKZtIz8TIxisVXnzyIPXg_zLP6EDoi/view?usp=drive_link",
    },
    {
      title: "CSPO Registration (For the applicants from the state of Gujarat)",
      description: "Guides for CSPO Registration process in Hierarchical order...",
      pdfLink: "https://drive.google.com/file/d/1jRqW1lFzbBjOEvC0zQdW5O-41nhja6T7/view?usp=drive_link",
    },
    {
      title: "Funding Support available to Startups",
      description: "Guidance About Scheme for assistance for Startups/ Innovation – Gujarat Industrial Policy –2020...",
      pdfLink: "https://drive.google.com/file/d/11DQn1x4rES8oDWXTHQad4_LXUWbtSrp1/view?usp=drive_link",
    },
    
  ];

  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
      <SchemeAndSupport />

      <div className="p-6 bg-grey-100">
        <h2 className="font-extrabold text-2xl mb-6 text-left">Startup Policies</h2>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
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
