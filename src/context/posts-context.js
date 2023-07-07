import { createContext, useContext, useEffect, useReducer } from "react";
import {
  createPostService,
  deletePostService,
  editPostService,
  getAllPostsService,
  postDisLikeService,
  postLikeService,
} from "../services/postServices";
import { postsReducer } from "../reducers/posts-reducer";
import { POSTS } from "../utils/actionTypes";
import { useAuth } from "./auth-context";
import { toast } from "react-toastify";

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

  const createPost = async (postInput) => {
    try {
      const { data, status } = await createPostService(
        postInput,
        authState?.token
      );
      if (status === 200 || status === 201) {
        postsDispatch({ type: POSTS.ADD, payload: data?.posts });
      }
    } catch (error) {
      console.log(error);
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

  const deletePost = async (postId) => {
    try {
      const { data, status } = await deletePostService(
        postId,
        authState?.token
      );
      if (status === 200 || status === 201) {
        postsDispatch({ type: POSTS.DELETE, payload: data?.posts });
        toast.success(`Post deleted successfully`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (postId, postData) => {
    try {
      const { data, status } = await editPostService(
        postId,
        postData,
        authState?.token
      );
      if (status === 200 || status === 201) {
        postsDispatch({ type: POSTS.EDIT, payload: data?.posts });
        toast.success("Post edited successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again");
    }
  };

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <PostsContext.Provider
      value={{
        postsData,
        likePost,
        disLikePost,
        deletePost,
        editPost,
        createPost,
        postsDispatch,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
