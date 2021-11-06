import "./suggestions-list.css";

const SuggestionsList = (props) => {
  const {
    activeSuggestionIndex,
    filteredSuggestions,
    handleClick,
    showSuggestions,
    searchString,
  } = props;

  if (showSuggestions && searchString) {
    if (filteredSuggestions.length) {
      return (
        <div className="suggestion-wrapper">
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestionIndex) {
                className = "suggestion-active";
              }
              return (
                <li
                  className={className}
                  key={suggestion.code}
                  onClick={handleClick}
                >
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="no-suggestions">
          <em>Country not available.</em>
        </div>
      );
    }
  }
};

export default SuggestionsList;
