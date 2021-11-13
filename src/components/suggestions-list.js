import "./suggestions-list.css";
import PropTypes from "prop-types";

const SuggestionsList = (props) => {
  const {
    activeSuggestionIndex,
    filteredSuggestions,
    handleClick,
    showSuggestions,
    searchString,
  } = props;

  const offsetitems = activeSuggestionIndex > 2 ? activeSuggestionIndex - 2 : 0;

  if (showSuggestions && searchString) {
    if (filteredSuggestions.length) {
      return (
        <div className="suggestion-wrapper">
          <ul className="suggestions">
            {filteredSuggestions.slice(offsetitems).map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (
                index === activeSuggestionIndex ||
                (activeSuggestionIndex > 2 && index === 2)
              ) {
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
  return null;
};

SuggestionsList.propTypes = {
  activeSuggestionIndex: PropTypes.number,
  filteredSuggestions: PropTypes.array,
  handleClick: PropTypes.func,
  showSuggestions: PropTypes.bool,
  searchString: PropTypes.string,
};

export default SuggestionsList;
