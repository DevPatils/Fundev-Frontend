import { useEffect, useState } from 'react';
import axios from 'axios';
import TopNavbar from '../Components/TopNavbar';
import BottomNavbar from '../Components/BottomNavbar';
import StartupList from '../Components/StartupList';
import FilterCard from '../Components/FilterCard';
import Footer from '../Components/Footer';

const Invest = () => {
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

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filterIndustry, setFilterIndustry] = useState<string | null>(null);
    const [startups, setStartups] = useState<Startup[]>([]);
    const [industries, setIndustries] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedStartupId, setSelectedStartupId] = useState<number | null>(null);
    const [investmentAmount, setInvestmentAmount] = useState<string>('');
    const [showInvestmentCard, setShowInvestmentCard] = useState<boolean>(false);

    const handleSort = () => {
        const sortedStartups = [...startups].sort((a, b) => {
            const comparison = a.name.localeCompare(b.name);
            return sortOrder === 'asc' ? comparison : -comparison;
        });
        setStartups(sortedStartups);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const fetchStartups = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://fundev-backend.onrender.com/api/startup/get-all-startups');
            const data = await response.json();
            if (Array.isArray(data.startups)) {
                setStartups(data.startups);
                const uniqueIndustries = Array.from(new Set(data.startups.map((startup: Startup) => startup.industry)));
                setIndustries(uniqueIndustries);
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

    const handleFundStartup = (startupId: number) => {
        setSelectedStartupId(startupId);
        setShowInvestmentCard(true);
    };

    const handleInvestmentSubmit = async () => {
        if (!investmentAmount || isNaN(Number(investmentAmount))) {
            alert('Please enter a valid amount.');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'https://fundev-backend.onrender.com/api/investment/invest',
                { startupId: selectedStartupId, amount: Number(investmentAmount) },
                {
                    headers: {
                        'auth-token': `${token}`, // Pass the auth token
                    },
                }
            );
            alert('Investment successful!');
            console.log('Investment response:', response.data);

            fetchStartups();
            setShowInvestmentCard(false);
        } catch (error) {
            console.error('Error making investment:', error);
            alert('Investment failed. Please try again later.');
        }
    };

    const handleCloseCard = () => {
        setShowInvestmentCard(false);
    };

    const handleFilterChange = (industry: string | null) => {
        setFilterIndustry(industry);
    };

    return (
        <>
            <TopNavbar />
            <BottomNavbar />
            <div className="flex flex-col h-[750px]">
                <div className="flex flex-grow">
                    {/* Filter Card (left side) */}
                    <div className="w-80 p-4 bg-gray-100">
                        <FilterCard
                            industries={industries}
                            onFilterChange={handleFilterChange}
                        />
                    </div>
                    {/* Startup List (right side) */}
                    <div className="flex-1 p-4">
                        <StartupList
                            startups={startups.filter(startup =>
                                filterIndustry ? startup.industry === filterIndustry : true
                            )}
                            sortOrder={sortOrder}
                            loading={loading}
                            error={error}
                            listtype="invest"
                            filterIndustry={filterIndustry}
                            handleSort={handleSort}
                            handleFilter={() => {}} // No industry filter
                            handleFundStartup={handleFundStartup}
                        />
                    </div>
                </div>
                {showInvestmentCard && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                            <button
                                onClick={handleCloseCard}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                &times;
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Invest in Startup</h2>
                            <div className="mb-4">
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Investment Amount:</label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={investmentAmount}
                                    onChange={(e) => setInvestmentAmount(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleInvestmentSubmit}
                                    className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
                                >
                                    Submit Investment
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <Footer />
            </div>
            
        </>
    );
};

export default Invest;
