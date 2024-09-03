import { useEffect, useState } from 'react'
import StartupList from '../Components/StartupList';
import axios from 'axios';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';

export interface Startup {
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
const Invest = () => {

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterIndustry, setFilterIndustry] = useState<string | null>(null);
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const fetchStartups = async () => {
    setLoading(true);
    setError(null);
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

  useEffect(() => {
    fetchStartups();
  }, []);

  const handleFundStartup = async (startupId: number) => {
    const amount = prompt('Enter the amount to invest:');
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://fundev-backend.onrender.com/api/investment/invest',
        { startupId, amount: Number(amount) },
        {
          headers: {
            'auth-token': `${token}`, // Pass the auth token
          },
        }
      );
      alert('Investment successful!');
      console.log('Investment response:', response.data);

      // Refresh the startup list after a successful investment
      fetchStartups();
    } catch (error) {
      console.error('Error making investment:', error);
      alert('Investment failed. Please try again later.');
    }
  };
  return (
    <div>
      <TopNavbar/>
      <BottomNavbar/>
      <div className="flex w-full h-[750px]">
        {/* Startup List (left side) */}
        <StartupList
          startups={startups}
          sortOrder={sortOrder}
          loading={loading}
          error={error}
          listtype="invest"
          filterIndustry={filterIndustry}
          handleSort={handleSort}
          handleFilter={handleFilter}
          handleFundStartup={handleFundStartup}
        />
      </div>
    </div>
  )
}

export default Invest
