import { useEffect, useState } from "react";
import GifImage from "../../components/Gif";
import { getGifs } from "../../libs/giphy";

const Trending = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(async () => {
    const gifs = await getGifs({
      pathname: "trending",
    });
    setGifs(gifs.data);
  }, []);

  return (
    <div className="trending">
      {gifs &&
        gifs.map((gif) => (
          <GifImage key={gif.id} src={gif.images.fixed_width.url} title={gif.title} />
        ))}
    </div>
  );
};

export default Trending;
