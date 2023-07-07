import axios from "axios";

export const addCommentService = (postId, commentData, token) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};
