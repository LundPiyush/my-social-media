import { USERS } from "../utils/actionTypes";

export const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case USERS.INITIALIZE:
      return { ...state, users: payload };
    case USERS.UPDATE_FOLLOWERS:
      return {
        ...state,
        users: state?.users?.map((user) =>
          user._id === payload?._id ? payload : user
        ),
      };
    case USERS.UPDATE_FOLLOWING:
      return {
        ...state,
        users: state?.users?.map((user) =>
          user?._id === payload?._id ? payload : user
        ),
      };
    default:
      return state;
  }
};
