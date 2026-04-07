// pages/Home.jsx
import SuggestionCard from "../components/SuggestionCard.jsx";

function Home({ allUserSuggestions, userByCategory, getSuggestionsByCategory }) {
  const suggestionsToShow =
    userByCategory.length > 0 ? userByCategory : allUserSuggestions;

  return (
    <>
      <div>
        <button onClick={() => getSuggestionsByCategory("UI")}>UI</button>
        <button onClick={() => getSuggestionsByCategory("UX")}>UX</button>
        <button onClick={() => getSuggestionsByCategory("Feature")}>Feature</button>
      </div>

      <div className="card-container">
        {suggestionsToShow.map((uniqueSuggestion, index) => (
          <SuggestionCard
            uniqueSuggestion={uniqueSuggestion}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default Home;