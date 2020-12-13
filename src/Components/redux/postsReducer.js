import { PUT_POSTS, GET_ERROR } from "./types";

const initialState = {
  upcoming: [],
  history: [],
  isError: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_POSTS:
      return {
        ...state,
        upcoming: action.payload.upcoming,
        history: action.payload.history,
      };
    case GET_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
