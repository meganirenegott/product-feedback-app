import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFeedback from "./pages/AddFeedback";

function App() {
  const [allUserSuggestions, setAllUserSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getAllSuggestions = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();
      setAllUserSuggestions(data);
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
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        }
      />
      <Route path="/add-feedback" element={<AddFeedback />} />
    </Routes>
  );
}

export default App;