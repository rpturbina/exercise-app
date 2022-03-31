import { useState } from "react";
import GifImage from "../../components/Gif";
import SearchBar from "../../components/SearchBar";

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
      setGifs(gifs.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInput = (event) => setSearchInput(event.target.value);

  return (
    <div className="search">
      <SearchBar
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={getGifs}
      />
      {gifs.map((gif) => (
        <GifImage key={gif.id} src={gif.images.fixed_width.url} title={gif.title} />
      ))}
    </div>
  );
};

export default Search;
