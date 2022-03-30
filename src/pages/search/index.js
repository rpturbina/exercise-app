// import { Component, useState } from "react";
import { useState } from "react";
import GifImage from "../../components/Gif";

const Search = () => {
  const [gifs, setGifs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getGifs = async (event) => {
    try {
      event.preventDefault();
      const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
      let LIMIT = 12;
      let queryTerm = searchInput;
      let endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_secret_key}&q=${queryTerm}&limit=${LIMIT}`;
      const gifs = await fetch(endPoint).then((response) => response.json());
      // console.log(gifs.data);
      setGifs(gifs.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event) => setSearchInput(event.target.value);

  return (
    <div className="search">
      <form>
        <label htmlFor="search">Search Bar : </label>
        <input type="text" onChange={handleInput} value={searchInput} />
        <button type="submit" onClick={getGifs}>
          Search
        </button>
      </form>
      {gifs.map((gif) => (
        <GifImage key={gif.id} src={gif.images.fixed_width.url} title={gif.title} />
      ))}
    </div>
  );
};

// class Search extends Component {
//   state = { gifs: [], searchInput: "" };

//   getGifs = async (e) => {
//     try {
//       e.preventDefault();
//       const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
//       let LIMIT = 12;
//       let queryTerm = this.state.searchInput;
//       let endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_secret_key}&q=${queryTerm}&limit=${LIMIT}`;
//       const gifs = await fetch(endPoint).then((response) => response.json());
//       // console.log(gifs.data);
//       this.setState({ gifs: gifs.data });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   handleInput = (e) => this.setState({ searchInput: e.target.value });

//   render() {
//     const { gifs } = this.state;
//     return (
//       <div className="search">
//         <form>
//           <label htmlFor="search">Search Bar : </label>
//           <input type="text" onChange={this.handleInput} value={this.state.searchInput} />
//           <button type="submit" onClick={this.getGifs}>
//             Search
//           </button>
//         </form>
//         {gifs.map((gif) => (
//           <GifImage key={gif.id} src={gif.images.fixed_width.url} title={gif.title} />
//         ))}
//       </div>
//     );
//   }
// }

export default Search;
