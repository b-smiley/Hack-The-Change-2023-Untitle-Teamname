import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// TODO clean these up
import Home from './pages/home';
import About from './pages/about';
import NavBar from './components/NavBar/NavBar';
import BuyPage from './pages/buy';
import SellPage from './pages/sell';
import RecipesPage from './pages/recipes';
import LoginPage from './pages/login';

function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Buy" element={< BuyPage/>} />
        <Route path="/Sell" element={<SellPage />} />
        <Route path="/Recipes" element={<RecipesPage />} />
        <Route path="/Login" element={<LoginPage />} />
        {/* Wild card route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
    {/* Button that querys backend */}
    <button onClick={async () => {
      const response = await fetch('http://localhost:5000/suggest_recipes');
      const body = await response.json();
      alert(body.message);
    }}>Test backend</button>
    </div>
    
  );
}

export default App;
