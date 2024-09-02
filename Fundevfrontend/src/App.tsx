import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Funding from './Pages/Funding';
import Schemes from './Pages/Schemes';
import PatentPage from './Pages/Patent'; // Import the PatentPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/patents" element={<PatentPage />} /> {/* Add route for PatentPage */}
      </Routes>
    </Router>
  );
}

export default App;
