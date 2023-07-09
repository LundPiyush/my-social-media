import { createContext, useContext, useEffect, useReducer } from "react";
import {
  addToBookmarkService,
  getAllBookmarksService,
  removeFromBookMarkService,
} from "../services/bookmarkService";
import { useAuth } from "./auth-context";
import { bookmarkReducer } from "../reducers/bookmark-reducer";
import { BOOKMARK } from "../utils/actionTypes";

const BookmarkContext = createContext(null);

export const BookmarkProvider = ({ children }) => {
  const { authState } = useAuth();
  const [bookmarkData, bookmarkDispatch] = useReducer(bookmarkReducer, {
    bookmark: [],
  });
  const getAllBookmarks = async () => {
    try {
      const { status, data } = await getAllBookmarksService(authState?.token);
      if (status === 200) {
        bookmarkDispatch({
          type: BOOKMARK.INITIALIZE,
          payload: data?.bookmarks,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const addToBookmark = async (postId) => {
    try {
      const { data, status } = await addToBookmarkService(
        postId,
        authState?.token
      );
      if (status === 200) {
        bookmarkDispatch({
          type: BOOKMARK.ADD_TO_BOOKMARK,
          payload: data?.bookmarks,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromBookMark = async (postId) => {
    try {
      const { data, status } = await removeFromBookMarkService(
        postId,
        authState?.token
      );
      if (status === 200) {
        bookmarkDispatch({
          type: BOOKMARK.REMOVE_FROM_BOOKMARK,
          payload: data?.bookmarks,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postAlreadyInBookmarks = (postId) => {
    return bookmarkData?.bookmark.filter((id) => id === postId).length !== 0;
  };
  useEffect(() => {
    if (authState?.token) {
      getAllBookmarks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState?.token, bookmarkData]);
  return (
    <BookmarkContext.Provider
      value={{
        bookmarkData,
        postAlreadyInBookmarks,
        addToBookmark,
        removeFromBookMark,
      }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(BookmarkContext);
