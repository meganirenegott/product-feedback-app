import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddFeedback from './pages/AddFeedback';

function App() {
  const [allUserSuggestions, setAllUserSuggestions] = useState([]);
  const [userByCategory, setSuggestionByCategory] = useState([]);

  const getAllSuggestions = async () => {
    try {
      const response = await fetch('/api/get-all-suggestions');
      const data = await response.json();
      setAllUserSuggestions(data);
    } catch (error) {
      console.error('Oopsies! Error fetching data:', error);
    }
  };

  const getSuggestionsByCategory = async (category) => {
    try {
      const response = await fetch(`/api/get-suggestions-by-category/${category}`);
      const data = await response.json();
      setSuggestionByCategory(data);
    } catch (error) {
      console.error('Oopsies! Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllSuggestions();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddFeedback">Add Feedback</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              allUserSuggestions={allUserSuggestions}
              userByCategory={userByCategory}
              getSuggestionsByCategory={getSuggestionsByCategory}
            />
          }
        />
        <Route path="/AddFeedback" element={<AddFeedback />} />
      </Routes>
    </div>
  );
}

export default App;