import "./App.css";
import Search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trending from "./pages/trending";
/**
 * TODO : Module-4-Exercise-2
 * * Using API provided by GIPHY, create a Trending page.
 * * Reuse the Gif component that you have created earlier.
 * * https://developers.giphy.com/docs/api/endpoint#trending
 */

function App() {
  return (
    // <div className="App">
    //   <Search />
    // </div>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/trending">Trending Gif</Link>
          </li>
          <li>
            <Link to="/search">Search Gif</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
