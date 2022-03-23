import "./App.css";
import Home from "./pages/home";
/**
 * TODO : Module-2-Exercise-2
 * * From previous exercise, convert elements into components
 * * Remember to put your components in /src/components/[your-component-name]/index.js
 * * For <Gif> component, read this JS variable and map it as props (hint: just use url and title)
 * * https://gist.github.com/mfaarabi/24f2aa2a8baa43567c7ddbdc270135b4
 */

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
