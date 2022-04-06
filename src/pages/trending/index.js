import { useEffect, useState } from "react";
import GifImage from "../../components/Gif";

const Trending = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    try {
      const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
      let LIMIT = 12;
      let endPoint = `https://api.giphy.com/v1/gifs/trending?api_key=${giphy_secret_key}&limit=${LIMIT}`;
      const gifs = await fetch(endPoint).then((response) => response.json());
      setGifs(gifs.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="trending">
      {gifs.map((gif) => (
        <GifImage key={gif.id} src={gif.images.fixed_width.url} title={gif.title} />
      ))}
    </div>
  );
};

export default Trending;
