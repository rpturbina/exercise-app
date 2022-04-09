import SearchBar from "../../components/SearchBar";
import GifImage from "../../components/Gif";
import gifData from "../../data/gif";
import gifsData from "../../data/gifs";

const Home = () => {
  const { title, url } = gifData;

  return (
    <div className="container">
      <SearchBar />
      <GifImage src={url} alt={title} />
      {/* Use list and looping, and also conditional rendering */}
      {gifsData.map((data) => {
        const { id, title, rating, url } = data;
        return rating !== "g" && <GifImage key={id} src={url} alt={title} />;
      })}
    </div>
  );
};

export default Home;
