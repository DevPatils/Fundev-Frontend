import { useState, useEffect } from 'react';
import fund from '../assets/info.jpg';
import OnboardForm from './startuponboarding';
import axios from 'axios';
import StartupList from './StartupList'; // Import the new component

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
        <StartupList
          startups={startups}
          sortOrder={sortOrder}
          loading={loading}
          error={error}
          filterIndustry={filterIndustry}
          handleSort={handleSort}
          handleFilter={handleFilter}
          handleFundStartup={handleFundStartup}
        />

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
