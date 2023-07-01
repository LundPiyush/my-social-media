import { POSTS } from "../utils/actionTypes";

export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case POSTS.INITIALIZE:
      return { ...state, posts: payload };
    case POSTS.ADD:
      return { ...state, posts: payload };
    case POSTS.DELETE:
      return { ...state, posts: payload };
    case POSTS.EDIT:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
