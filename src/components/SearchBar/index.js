import Button from "../Button";

const SearchBar = () => (
  <form>
    <label htmlFor="search">Search Bar : </label>
    <input type="text" />
    <Button value={"Search"} />
  </form>
);

export default SearchBar;
