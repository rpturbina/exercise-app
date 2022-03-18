import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;

const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${giphy_secret_key}&tag=&rating=g`;

const getResponse = async () => {
  try {
    const response = await axios.get(endpoint, {});
    if (response.status !== 200) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

getResponse();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
