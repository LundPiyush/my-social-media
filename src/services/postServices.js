import axios from "axios";

export const getAllPostsService = () => {
  return axios.get("/api/posts");
};
