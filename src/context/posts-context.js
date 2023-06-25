import { createContext, useContext, useEffect, useReducer } from "react";
import {
  getAllPostsService,
  postDisLikeService,
  postLikeService,
} from "../services/postServices";
import { postsReducer } from "../reducers/posts-reducer";
import { POSTS } from "../utils/actionTypes";
import { useAuth } from "./auth-context";

const PostsContext = createContext(null);
export const PostsProvider = ({ children }) => {
  const [postsData, postsDispatch] = useReducer(postsReducer, { posts: [] });
  const { authState } = useAuth();

  const getAllPosts = async () => {
    try {
      const { data, status } = await getAllPostsService();
      if (status === 200) {
        postsDispatch({ type: POSTS.INITIALIZE, payload: data?.posts });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const likePost = async (postId) => {
    try {
      const { status, data } = await postLikeService(postId, authState?.token);
      if (status === 200 || status === 201) {
        postsDispatch({ type: POSTS.INITIALIZE, payload: data?.posts });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const disLikePost = async (postId) => {
    try {
      const { data, status } = await postDisLikeService(
        postId,
        authState?.token
      );
      if (status === 200 || status === 201) {
        postsDispatch({ type: POSTS.INITIALIZE, payload: data?.posts });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <PostsContext.Provider value={{ postsData, likePost, disLikePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
