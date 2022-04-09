const searchGifs = (query) => ({
  type: "gif/search",
  payload: query,
});

export { searchGifs };
