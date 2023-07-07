import { createContext, useContext } from "react";
import { useAuth } from "./auth-context";
import { addCommentService } from "../services/commentService";
import { usePosts } from "./posts-context";
import { POSTS } from "../utils/actionTypes";

const CommentContext = createContext(null);

export const CommentProvider = ({ children }) => {
  const { authState } = useAuth();
  const { postsDispatch } = usePosts();
  const addComment = async (postId, comment) => {
    try {
      const { data, status } = await addCommentService(
        postId,
        comment,
        authState?.token
      );
      if (status === 201 || status === 200) {
        postsDispatch({ type: POSTS.INITIALIZE, payload: data?.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CommentContext.Provider value={{ addComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
