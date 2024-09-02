import React from 'react';
import { useNavigate } from 'react-router-dom';

const SchemeAndSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="font-extrabold text-2xl">Policies and Schemes</h1>
      <br />
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="w-1/12 px-4 py-2 border text-left text-sm font-bold text-blue-900">ID</th>
            <th className="w-5/12 px-4 py-2 border text-left text-sm font-bold text-blue-900">
              DESCRIPTION OF RULES, REGULATIONS, ACTS INTRODUCED OR AMENDED TO SUPPORT STARTUPS
            </th>
            <th className="w-2/12 px-4 py-2 border text-left text-sm font-bold text-blue-900">DATE OF INTRODUCTION</th>
            <th className="w-2/12 px-4 py-2 border text-left text-sm font-bold text-blue-900">FOR MORE DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border text-sm font-semibold text-gray-700">1.</td>
            <td className="px-4 py-2 border text-base text-gray-700">Angel Investors Facilitation</td>
            <td className="px-4 py-2 border text-base text-gray-700">Apr 25, 2018</td>
            <td className="px-4 py-2 border text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/your-url');
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded inline-block text-center"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-sm font-semibold text-gray-700">2.</td>
            <td className="px-4 py-2 border text-base text-gray-700">Science, Technology and Innovation policy of Gujarat</td>
            <td className="px-4 py-2 border text-base text-gray-700">Apr 15, 2018</td>
            <td className="px-4 py-2 border text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/your-url'); // Replace '/your-url' with the actual URL
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded inline-block text-center"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-sm font-semibold text-gray-700">3.</td>
            <td className="px-4 py-2 border text-base text-gray-700">Exemptions - MSMEs & Start Ups in purchases made by the Government</td>
            <td className="px-4 py-2 border text-base text-gray-700">Apr 11, 2018</td>
            <td className="px-4 py-2 border text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/your-url'); // Replace '/your-url' with the actual URL
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded inline-block text-center"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-sm font-semibold text-gray-700">4.</td>
            <td className="px-4 py-2 border text-base text-gray-700">Amendment in Self-Certification-cum-Consolidated Annual Return Scheme</td>
            <td className="px-4 py-2 border text-base text-gray-700">Mar 22, 2018</td>
            <td className="px-4 py-2 border text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/your-url'); // Replace '/your-url' with the actual URL
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded inline-block text-center"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-sm font-semibold text-gray-700">5.</td>
            <td className="px-4 py-2 border text-base text-gray-700">Amendment in Self-Certification-cum-Consolidated Annual Return Scheme</td>
            <td className="px-4 py-2 border text-base text-gray-700">Mar 9, 2017</td>
            <td className="px-4 py-2 border text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/your-url'); // Replace '/your-url' with the actual URL
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded inline-block text-center"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-sm font-semibold text-gray-700">6.</td>
            <td className="px-4 py-2 border text-base text-gray-700">Self-Certification-cum-Consolidated Annual Return Scheme</td>
            <td className="px-4 py-2 border text-base text-gray-700">Dec 31, 2016</td>
            <td className="px-4 py-2 border text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/your-url'); // Replace '/your-url' with the actual URL
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded inline-block text-center"
              >
                View
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SchemeAndSupport;