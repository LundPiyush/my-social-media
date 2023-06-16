import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllPostsService } from "../services/postServices";
import { postsReducer } from "../reducers/posts-reducer";

const PostsContext = createContext(null);
const initailPosts = { posts: [] };
export const PostsProvider = ({ children }) => {
  const [postsData, postsDispatch] = useReducer(postsReducer, initailPosts);
  const getAllPosts = async () => {
    try {
      const { data, status } = await getAllPostsService();
      if (status === 200) {
        postsDispatch({ type: "POST_INITIALIZE", payload: data?.posts });
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <PostsContext.Provider value={{ postsData }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
