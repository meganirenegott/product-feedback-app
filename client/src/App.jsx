import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFeedback from "./pages/AddFeedback";

function App() {
  const [allUserSuggestions, setAllUserSuggestions] = useState([]);
  const [userByCategory, setSuggestionByCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getAllSuggestions = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();
      setAllUserSuggestions(data);
      setSuggestionByCategory([]);
      setSelectedCategory("All");
    } catch (error) {
      console.error("Oopsies! Error fetching data:", error);
    }
  };

  const getSuggestionsByCategory = async (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setSuggestionByCategory([]);
      return;
    }

    try {
      const response = await fetch(`/api/get-suggestions-by-category/${category}`);
      const data = await response.json();
      setSuggestionByCategory(data);
    } catch (error) {
      console.error("Oopsies! Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllSuggestions();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            allUserSuggestions={allUserSuggestions}
            userByCategory={userByCategory}
            getSuggestionsByCategory={getSuggestionsByCategory}
            selectedCategory={selectedCategory}
          />
        }
      />
      <Route path="/add-feedback" element={<AddFeedback />} />
    </Routes>
  );
}

export default App;