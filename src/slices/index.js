import { combineReducers } from "redux";

import postsReducer from "./posts";
import postReducer from "./post";
import commentsReducer from "./comments";
import settingsReducer from "./settings";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: postReducer,
  settings: settingsReducer
});

export default rootReducer;
