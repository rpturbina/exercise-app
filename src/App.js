import "./App.css";
// import Home from "./pages/home";
import Search from "./pages/search";
/**
 * TODO : Module-3-Exercise-1
 * * Create a search feature using Giphy API key created from Module 1
 * * Use the following endpoint https://developers.giphy.com/docs/api/endpoint#search
 * * Create inside directory /src/pages/search/index.js
 * * Use existing text input and search button to handle user’s event
 * * Show the first 12 results of the gifs (search for 12 gifs from the network call, not modifying the response array)
 */

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Search />
    </div>
  );
}

export default App;
