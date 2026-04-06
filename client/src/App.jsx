import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddFeedback from './pages/AddFeedback';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Add Feedback</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddFeedback" element={<AddFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
