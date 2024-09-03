import { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import fund from '../assets/info.jpg';
import OnboardForm from './startuponboarding';
import axios from 'axios';

function Fundingsteps() {
  const [showform, setShowform] = useState(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterIndustry, setFilterIndustry] = useState<string | null>(null);

  interface Startup {
    id: number;
    name: string;
    description: string;
    industry: string;
    fundingGoal: number;
    raisedAmount: number;
    createdAt: string;
    updatedAt: string;
    userId: number;
  }

  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleAddclick = () => {
    setShowform(!showform);
  };

  const handleCloseForm = () => {
    setShowform(false);
  };

  const handleSort = () => {
    const sortedStartups = [...startups].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });
    setStartups(sortedStartups);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilter = () => {
    const industry = prompt('Enter industry to filter:');
    if (industry !== null) {
      setFilterIndustry(industry.trim() !== '' ? industry : null);
    }
  };

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await fetch('https://fundev-backend.onrender.com/api/startup/get-all-startups');
        const data = await response.json();
        if (Array.isArray(data.startups)) {
          setStartups(data.startups);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (error) {
        console.error('Error fetching startups:', error);
        setError('Failed to fetch startups. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const filteredStartups = filterIndustry
    ? startups.filter((startup) =>
        startup.industry.toLowerCase().includes(filterIndustry.toLowerCase())
      )
    : startups;

  const handleFundStartup = async (startupId: number) => {
    const amount = prompt('Enter the amount to invest:');
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(
        'https://fundev-backend.onrender.com/api/investment/invest',
        { startupId, amount: Number(amount) },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the auth token
          },
        }
      );
      alert('Investment successful!');
      console.log('Investment response:', response.data);
    } catch (error) {
      console.error('Error making investment:', error);
      alert('Investment failed. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img src={fund} alt="Funding Steps" className="h-auto w-3/5 mb-4" />

      <div className="flex w-full h-[750px]">
        {/* Startup List (left side) */}
        <div className="flex-1 border p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Startup List</h2>
            <div className="flex space-x-2">
              <button
                onClick={handleSort}
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
              >
                Sort by Name ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
              </button>
              <button
                onClick={handleFilter}
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
              >
                Filter by Industry
              </button>
            </div>
          </div>
          {loading ? (
            <p>Loading startups...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : filteredStartups.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Name</th>
                    <th className="py-2 px-4 border-b text-left">Industry</th>
                    <th className="py-2 px-4 border-b text-right">Funding Goal</th>
                    <th className="py-2 px-4 border-b text-right">Raised Amount</th>
                    <th className="py-2 px-4 border-b text-left">Created At</th>
                    <th className="py-2 px-4 border-b text-center">Fund</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStartups.map((startup) => (
                    <tr key={startup.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{startup.name}</td>
                      <td className="py-2 px-4 border-b">{startup.industry}</td>
                      <td className="py-2 px-4 border-b text-right">
                        ${startup.fundingGoal.toLocaleString()}
                      </td>
                      <td className="py-2 px-4 border-b text-right">
                        ${startup.raisedAmount.toLocaleString()}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {new Date(startup.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          onClick={() => handleFundStartup(startup.id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                        >
                          Fund Startup
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No startups found.</p>
          )}
        </div>

        {/* Add Startup Form (right side) */}
        <div className="w-2/5 border p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Add Your Startup</h2>
            
            
          </div>
          {showform && <OnboardForm onClose={handleCloseForm} />}
        </div>
      </div>
    </div>
  );
}

export default Fundingsteps;
