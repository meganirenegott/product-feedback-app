// function for suggestion card



function suggestionCard({ uniqueSuggestion }) {
    return (
        <>
            <div className='suggestion-card'>
                <h2 className="feature-card-title">{uniqueSuggestion.feedback_title}</h2>
                <p className="feature-card-text">{uniqueSuggestion.feedback_detail}</p>
                <button className="feature-card-button">{uniqueSuggestion.category}</button>
            </div>
        </>
    );
}

export default suggestionCard;