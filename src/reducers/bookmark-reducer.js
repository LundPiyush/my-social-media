import { BOOKMARK } from "../utils/actionTypes";

export const bookmarkReducer = (state, { type, payload }) => {
  switch (type) {
    case BOOKMARK.INITIALIZE:
      return { ...state, bookmark: payload };
    case BOOKMARK.ADD_TO_BOOKMARK:
      return { ...state, bookmark: payload };
    case BOOKMARK.REMOVE_FROM_BOOKMARK:
      return { ...state, bookmark: payload };
    default:
      return state;
  }
};
