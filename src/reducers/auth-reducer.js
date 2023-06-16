export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_TOKEN":
      return { ...state, token: payload };
    case "SET_USER":
      return { ...state, user: payload };
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: payload };
    default:
      return state;
  }
};
