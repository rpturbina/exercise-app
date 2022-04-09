const SearchBar = (props) => {
  const { handleSearchInput, handleSearchSubmit, searchInput } = props;
  return (
    <form>
      <label htmlFor="search">Search Bar : </label>
      <input type="text" onChange={handleSearchInput} value={searchInput} />
      <button type="submit" onClick={handleSearchSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
