import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchGifs } from "../../redux/actions";
import GifImage from "../../components/Gif";
import SearchBar from "../../components/SearchBar";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.query);
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");

  const getGifs = async (event) => {
    try {
      event.preventDefault();
      dispatch(searchGifs(query));
      const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
      let LIMIT = 12;
      let queryTerm = query;
      let endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_secret_key}&q=${queryTerm}&limit=${LIMIT}`;
      const gifs = await fetch(endPoint).then((response) => response.json());
      setGifs(gifs.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInput = (event) => setQuery(event.target.value);

  return (
    <div className="search">
      <h1>Search Gifs: {searchQuery}</h1>
      <SearchBar
        searchInput={query}
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
