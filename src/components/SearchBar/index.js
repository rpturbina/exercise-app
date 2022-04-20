import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SearchBar = (props) => {
  const { handleSearchInput, handleSearchSubmit, searchInput } = props;
  return (
    <Stack component="form" direction="row">
      {/* <form> */}
      {/* <label htmlFor="search">Search Bar : </label>
        <input type="text" onChange={handleSearchInput} value={searchInput} /> */}
      <TextField
        id="outlined-basic"
        label="Search Field"
        variant="standard"
        onChange={handleSearchInput}
        defaultValue={searchInput}
      />
      {/* <button type="submit" onClick={handleSearchSubmit}>
          Search
        </button> */}
      <Button variant="contained" onClick={handleSearchSubmit} type="submit">
        Search
      </Button>
      {/* </form> */}
    </Stack>
  );
};

export default SearchBar;
