import { useEffect, useState, useRef } from "react";
import SuggestionsList from "./suggestions-list";
import Country from "./country";
import "./search.css";

const SearchWithAutoCompete = ({ entries }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchString, setSearchString] = useState("");
  const inputRef = useRef(null);
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    inputRef && inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const searchString = e.target.value;

    // Filter entries based on the search string
    const filtered = entries.filter((entry) =>
      entry?.name?.toLowerCase().startsWith(searchString.toLowerCase())
    );

    //set the values to show the suggestion list
    setSearchString(searchString);
    setFilteredSuggestions(filtered);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleClick = (e) => {
    //upon mouse click on the selection, update the input with user selection
    setActiveSuggestionIndex(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSearchString(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //user pressed enter key
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setSearchString((filteredSuggestions[activeSuggestionIndex] || {}).name);
    } else if (e.keyCode === 38) {
      // User pressed the up arrow, decrement activeSuggestionIndex if not already in the first element
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      // User pressed the down arrow, increment the index if not alreay at the bottom
      if (activeSuggestionIndex + 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  return (
    <>
      <div>
        <input
          className="search-input"
          type="text"
          value={searchString}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
          placeholder="Enter country name"
        />
      </div>

      {showSuggestions && searchString && (
        <SuggestionsList
          showSuggestions={showSuggestions}
          searchString={searchString}
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          handleClick={handleClick}
        />
      )}
    </>
  );
};
export default SearchWithAutoCompete;
