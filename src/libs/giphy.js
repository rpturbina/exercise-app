const getGifs = async ({ pathname, query }) => {
  try {
    // eslint-disable-next-line no-undef
    const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;

    if (pathname === "search") {
      const LIMIT = 20;
      const endPoint = `https://api.giphy.com/v1/gifs/${pathname}?api_key=${giphy_secret_key}&q=${query}&limit=${LIMIT}`;
      const gifs = await fetch(endPoint).then((response) => response.json());
      return gifs;
    }

    if (pathname === "trending") {
      const LIMIT = 20;
      const endPoint = `https://api.giphy.com/v1/gifs/${pathname}?api_key=${giphy_secret_key}&limit=${LIMIT}`;
      const gifs = await fetch(endPoint).then((response) => response.json());
      return gifs;
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

export { getGifs };
