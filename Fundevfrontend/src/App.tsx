import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Funding from './Pages/Funding';
import Schemes from './Pages/Schemes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funding" element={<Funding/>} />
        <Route path="/schemes" element={<Schemes/>} />
      </Routes>
    </Router>
  );
}

export default App;
