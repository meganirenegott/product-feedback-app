// pages/Home.jsx
import { Link } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard.jsx";

function Home({ allUserSuggestions, userByCategory, getSuggestionsByCategory }) {
  const suggestionsToShow =
    userByCategory.length > 0 ? userByCategory : allUserSuggestions;

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
              className="filter-button"
              onClick={() => getSuggestionsByCategory("All")}
            >
              All
            </button>

            <button
              className="filter-button"
              onClick={() => getSuggestionsByCategory("UI")}
            >
              UI
            </button>

            <button
              className="filter-button"
              onClick={() => getSuggestionsByCategory("UX")}
            >
              UX
            </button>

            <button
              className="filter-button"
              onClick={() => getSuggestionsByCategory("Enhancement")}
            >
              Enhancement
            </button>

            <button
              className="filter-button"
              onClick={() => getSuggestionsByCategory("Bug")}
            >
              Bug
            </button>

            <button
              className="filter-button"
              onClick={() => getSuggestionsByCategory("Feature")}
            >
              Feature
            </button>
          </div>
        </aside>

        <main className="suggestions-panel">
          <div className="suggestions-heading">
            <div className="suggestions-heading-left">
              <h2>{suggestionsToShow.length} Suggestions</h2>
            </div>

            <Link to="/add-feedback" className="add-feedback-link">
              + Add Feedback
            </Link>
          </div>

          <div className="card-container">
            {suggestionsToShow.length > 0 ? (
              suggestionsToShow.map((uniqueSuggestion, index) => (
                <SuggestionCard
                  uniqueSuggestion={uniqueSuggestion}
                  key={index}
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