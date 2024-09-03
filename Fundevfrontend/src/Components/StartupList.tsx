import React from 'react';

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

interface StartupListProps {
  startups: Startup[];
  sortOrder: 'asc' | 'desc';
  loading: boolean;
  error: string | null;
  filterIndustry: string | null;
  handleSort: () => void;
  listtype: string;
  handleFilter: () => void;
  handleFundStartup: (startupId: number) => void;
}

const StartupList: React.FC<StartupListProps> = ({
  startups,
  sortOrder,
  loading,
  error,
  filterIndustry,
  listtype,
  handleSort,
  handleFilter,
  handleFundStartup,
}) => {
  const filteredStartups = filterIndustry
    ? startups.filter((startup) =>
        startup.industry.toLowerCase().includes(filterIndustry.toLowerCase())
      )
    : startups;

  return (
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
                <th className="py-2 px-4 border-b text-center">Details</th>
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
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      {listtype === 'invest' ? 'Fund' : 'Details'}
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
  );
};

export default StartupList;
