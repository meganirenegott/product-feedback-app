// function for suggestion card



function suggestionCard({ uniqueSuggestion }) {
    return (
        <>
            <div className='suggestion-card'>
                <h2>{uniqueSuggestion.feedback_title}</h2>
                <p>{uniqueSuggestion.feedback_detail}</p>
                <button>{uniqueSuggestion.category}</button>
            </div>
        </>
    );
}

export default suggestionCard;