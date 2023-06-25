import axios from "axios";

export const getAllPostsService = () => {
  return axios.get("/api/posts");
};

export const getPostService = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};

export const postLikeService = (postId, token) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const postDisLikeService = (postId, token) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const getUserPostsService = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};
