import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline'; // Correct Heroicons import
import fund from '../assets/funding.png';
import OnboardForm from './startuponboarding';

function Fundingsteps() {
  const [showform, setShowform] = useState(false);

  const handleAddclick = () => {
    setShowform(!showform);
  };

  const handleCloseForm = () => {
    setShowform(false);
  };

  return (
    <div className="flex flex-col items-center">
      <img src={fund} alt="Funding Steps" className="h-auto w-3/5 mb-4" />

      <div className="flex w-full justify-between m-10">
        <div className="w-3/5 border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-2">Startups List</h2>
            <button onClick={handleAddclick} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <PlusIcon className="h-5 w-5 mr-2" />
              Add your startup
            </button>
          </div>
          {showform && <OnboardForm onClose={handleCloseForm} />}
        </div>

        {/* Second div (right side) */}
        <div className="w-2/5 border p-4">
          <h2 className="text-xl font-bold mb-2">Details</h2>
        </div>
      </div>
    </div>
  );
}

export default Fundingsteps;