import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import GifImage from "../../components/Gif";
import SearchBar from "../../components/SearchBar";
import { searchGifs } from "../../redux/actions";
import { getGifs } from "../../libs/giphy";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.query);
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (!query) {
      alert("Please enter a keyword for search");
      return;
    }
    if (query) {
      dispatch(searchGifs(query));
      const gifs = await getGifs({
        pathname: "search",
        query: query,
      });
      setGifs(gifs.data);
    }
  };

  const handleSearchInput = (event) => setQuery(event.target.value);

  return (
    <>
      {/* <h1>Search Gifs: {searchQuery}</h1> */}
      <Typography variant="h5" component="h1">
        Search Gifs: {searchQuery}
      </Typography>
      <SearchBar
        searchInput={query}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
        {gifs &&
          gifs.map((gif) => (
            // <Grid item xs="auto" key={gif.id}>
            <GifImage
              item
              xs="auto"
              key={gif.id}
              src={gif.images.fixed_width.url}
              title={gif.title}
            />
            // </Grid>
          ))}
      </Grid>
      <div className="search">
        {gifs &&
          gifs.map((gif) => (
            <GifImage key={gif.id} src={gif.images.fixed_width.url} title={gif.title} />
          ))}
      </div>
    </>
  );
};

export default Search;
