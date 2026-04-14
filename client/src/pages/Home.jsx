// pages/Home.jsx
import SuggestionCard from "../components/SuggestionCard.jsx";

function Home({ allUserSuggestions, userByCategory, getSuggestionsByCategory }) {
  const suggestionsToShow =
    userByCategory.length > 0 ? userByCategory : allUserSuggestions;

  return (
    <>
      <div className="home-page-wrapper">
        <section className="header-container"></section>
        <header>
          <div>
            <h1>My Company</h1>
            <p>Feedback Form</p>
          </div>
       
      <div class="burger-button">
        <button onClick={() => getSuggestionsByCategory("UI")}>UI</button>
        <button onClick={() => getSuggestionsByCategory("UX")}>UX</button>
        <button onClick={() => getSuggestionsByCategory("Feature")}>Feature</button>
        <button onClick={() => getSuggestionsByCategory("Enhancement")}>Enhancement</button>
        <button onClick={() => getSuggestionsByCategory("Bug")}>Bug</button>
        <button onClick={() => getSuggestionsByCategory("All")}>All</button>
      </div>
 </header>
        <main className="suggestions">
          <div className="suggestions-heading">
            <h2></h2>
            <a href="/add-feedback" data-discover="true">
              <button className="+ Add Feedback"></button>
          </a>
          </div>
          <div className="card-container">
        {suggestionsToShow.map((uniqueSuggestion, index) => (
          <SuggestionCard
            uniqueSuggestion={uniqueSuggestion}
            key={index}
          />
        ))}
            </div>
            </main>
        </div>
    </>
  );
}

export default Home;