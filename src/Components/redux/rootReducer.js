import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  loader: loaderReducer,
});
