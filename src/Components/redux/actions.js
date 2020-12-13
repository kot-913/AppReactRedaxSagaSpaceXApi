import {
  REQUEST_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  PUT_POSTS,
  GET_ERROR,
} from "./types";

export function fetchPosts() {
  return {
    type: REQUEST_POST,
  };
}

export function putPosts(data) {
  const upcoming = data.filter((item) => item.upcoming);
  const history = data.filter((item) => !item.upcoming);
  return {
    type: PUT_POSTS,
    payload: {
      upcoming: upcoming,
      history: history,
    },
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function getError() {
  return {
    type: GET_ERROR,
  };
}
