const gifReducer = (state, action) => {
  switch (action.type) {
    case "gif/search":
      return {
        query: action.payload,
      };
    default:
      return state;
  }
};

export { gifReducer };
