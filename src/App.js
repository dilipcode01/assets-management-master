import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import PortfolioDashboard from './components/dashboard';
import Header from './components/Header';
import AssetsBalance from './components/assestsBalance';

function App() {
  return (
    <Router>
      <div className="w-full md:w-1/2 mx-auto md:shadow md:my-2 rounded-xl">
        <Header />
        <Routes>
          <Route exact path="/" element={<PortfolioDashboard/>} />
          <Route path="/assets-balance" element={<AssetsBalance/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
