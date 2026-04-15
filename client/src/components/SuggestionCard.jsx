function SuggestionCard({ uniqueSuggestion }) {
  return (
    <div className="suggestion-card">
      <div className="suggestion-content">
        <h3 className="feature-card-title">
          {uniqueSuggestion.feedback_title}
        </h3>

        <p className="feature-card-description">
          {uniqueSuggestion.feedback_detail}
        </p>

        <span className="feature-card-button">
          {uniqueSuggestion.category}
        </span>
      </div>
    </div>
  );
}

export default SuggestionCard;