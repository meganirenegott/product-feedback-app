// pages/Home.jsx
import SuggestionCard from "../components/SuggestionCard.jsx";

function Home({ allUserSuggestions, userByCategory, getSuggestionByCategory }) {

    // category display
    const suggestionsToShow =
        usersByCategory.length > 0 ? userByCategory : allUserSuggestions;
    return (
        <>
            {/* category buttons */}
             <div>
                <button onClick={() => getSuggestionsByCategory("UI")}>UI</button>
                <button onClick={() => getSuggestionsByCategory("UX")}>UX</button>
                <button onClick={() => getSuggestionsByCategory("Feature")}>Feature</button>
            </div>
            <div className="card-container">
                {allUserSuggestions && allUserSuggestions.map((uniqueSuggestion, index) => <SuggestionCard uniqueSuggestion={uniqueSuggestion} key={index} />)}
            </div>
            <div className="category-suggestion-filter">
                {userByCategory && userByCategory.map((uniqueSuggestion, index) => <SuggestionCard uniqueSuggestion={uniqueSuggestion} key={index} />)}
            </div>
        </>
    )
}
    
    
    
    
    
    
    
    
export default Home;