import SearchBar from "../../components/SearchBar";
import GifImage from "../../components/Gif";
import gifData from "../../data/gif";

const Home = () => {
  const { title, url } = gifData;

  return (
    <div className="container">
      <SearchBar />
      <GifImage src={url} alt={title} />
    </div>
  );
};

export default Home;
