import axios from "axios";

export const getAllBookmarksService = (token) => {
  return axios.get(`/api/users/bookmark`, {
    headers: { authorization: token },
  });
};

export const addToBookmarkService = (postId, token) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const removeFromBookMarkService = (postId, token) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
