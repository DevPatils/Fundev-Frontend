import React from "react";

interface FundingCardProps {
  title: string;
  description: string;
  pdfLink: string;
}

const FundingCard: React.FC<FundingCardProps> = ({
  title,
  description,
  pdfLink,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1">
      {/* Title Section with Fixed Height */}
      <div className="px-6 py-4 bg-blue-100 h-24 flex items-center">
        <div className="font-bold text-xl text-blue-800">{title}</div>
      </div>
      
      {/* Description Section */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      
      {/* Button Section with Centered Alignment */}
      <div className="px-6 pt-4 pb-4 flex justify-center">
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View PDF
        </a>
      </div>
    </div>
  );
};

export default FundingCard;
