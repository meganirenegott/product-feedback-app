import { Link } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard.jsx";

function Home({ allUserSuggestions, selectedCategory, setSelectedCategory }) {
  const suggestionsToShow =
    selectedCategory === "All"
      ? allUserSuggestions
      : allUserSuggestions.filter(
          (suggestion) => suggestion.category === selectedCategory
        );

  return (
    <div className="home-page-wrapper">
      <div className="home-layout">
        <aside className="sidebar">
          <div className="brand-card">
            <div className="brand-text">
              <h1>My Company</h1>
              <p>Feedback Board</p>
            </div>
          </div>

          <div className="filter-card">
            <button
              className={`filter-button ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>

            <button
              className={`filter-button ${selectedCategory === "UI" ? "active" : ""}`}
              onClick={() => setSelectedCategory("UI")}
            >
              UI
            </button>

            <button
              className={`filter-button ${selectedCategory === "UX" ? "active" : ""}`}
              onClick={() => setSelectedCategory("UX")}
            >
              UX
            </button>

            <button
              className={`filter-button ${selectedCategory === "Enhancement" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Enhancement")}
            >
              Enhancement
            </button>

            <button
              className={`filter-button ${selectedCategory === "Bug" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Bug")}
            >
              Bug
            </button>

            <button
              className={`filter-button ${selectedCategory === "Feature" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Feature")}
            >
              Feature
            </button>
          </div>
        </aside>

        <main className="suggestions-panel">
          <div className="suggestions-heading">
            <h2>{suggestionsToShow.length} Suggestions</h2>

            <Link to="/add-feedback" className="add-feedback-link">
              + Add Feedback
            </Link>
          </div>

          <div className="card-container">
            {suggestionsToShow.length > 0 ? (
              suggestionsToShow.map((uniqueSuggestion) => (
                <SuggestionCard
                  uniqueSuggestion={uniqueSuggestion}
                  key={uniqueSuggestion.id}
                />
              ))
            ) : (
              <div className="empty-state">
                <img
                  src="/assets/suggestions/illustration-empty.svg"
                  alt="No feedback yet"
                />
                <h3>There is no feedback yet.</h3>
                <p>
                  Got a suggestion? Found a bug that needs to be squashed?
                  We love hearing about new ideas to improve our app.
                </p>
                <Link to="/add-feedback" className="add-feedback-link empty-button">
                  + Add Feedback
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;