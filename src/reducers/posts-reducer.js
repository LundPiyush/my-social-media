export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "POST_INITIALIZE":
      return { ...state, posts: payload };
    default:
      return state;
  }
};
