import "./App.css";
import Search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trending from "./pages/trending";
/**
 * TODO : Module-4-Exercise-3
 * * 1. Analyze your code, write down any impure / mutable codes that you wrote, and fix those
 * * 2. Try to run eslint and fix the problems (if any)
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
