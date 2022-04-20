import "./App.css";
import Search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trending from "./pages/trending";
/**
 * TODO : Module-5-Exercise-2
 * * ● From giphy app, identify existing components and look for UI component library that provides your needs.
 * * ● (nice to have/extra points) implement the new component into giphy app.
 */

function App() {
  return (
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
