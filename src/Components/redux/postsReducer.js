import { PUT_POSTS, GET_ERROR, OFFSET_INCREMENT } from "./types";

const initialState = {
  upcoming: [],
  history: [],
  isError: false,
  offset: 0,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_POSTS:
      return {
        ...state,
        upcoming: [...state.upcoming, ...action.payload.upcoming],
        history: [...state.history, ...action.payload.history],
      };
    case GET_ERROR:
      return {
        ...state,
        isError: true,
      };
    case OFFSET_INCREMENT:
      return {
        ...state,
        offset: state.offset + 6,
      };
    default:
      return state;
  }
};
