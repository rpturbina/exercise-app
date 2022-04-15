import "./App.css";
import Search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trending from "./pages/trending";
/**
 * TODO : Module-5-Exercise-1
 * * Layout your giphy app into the following display (hint: use no. 7 “RAM” from https://1linelayouts.glitch.me/ )
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
