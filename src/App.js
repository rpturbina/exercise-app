import "./App.css";
import Search from "./pages/search";
/**
 * TODO : Module-3-Exercise-3
 * * Extract form into <SearchBar> component and lift its state up (discuss what should be the props for <SearchBar> component!)
 */

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
