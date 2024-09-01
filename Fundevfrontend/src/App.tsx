import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Funding from './Pages/Funding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funding" element={<Funding/>} />
      </Routes>
    </Router>
  );
}

export default App;
