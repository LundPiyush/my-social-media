import axios from "axios";

export const getAllUsersService = () => {
  return axios.get("/api/users");
};

export const followUserService = (followerId, token) => {
  return axios.post(
    `/api/users/follow/${followerId}`,
    {},
    { headers: { authorization: token } }
  );
};
export const unFollowUserService = (followerId, token) => {
  return axios.post(
    `/api/users/unfollow/${followerId}`,
    {},
    { headers: { authorization: token } }
  );
};
export const getUserProfileDetailsService = (username) => {
  return axios.get(`/api/users/${username}`);
};
