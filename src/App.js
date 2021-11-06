import "./App.css";
import { countryList } from "./country-list";
import SearchWithAutoCompete from "./components/search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Start typing country name and get suggestions to autocomplete.
      </header>
      <SearchWithAutoCompete entries={countryList} />
    </div>
  );
}

export default App;
