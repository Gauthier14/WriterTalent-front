import { combineReducers } from "redux";

import postsReducer from "./posts";
import userReducer from "./user";
import menuReducer from "./menu";
import editorReducer from "./editor";
import viewerReducer from "./viewer";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  menu: menuReducer,
  editor: editorReducer,
  viewer: viewerReducer,
});

export default rootReducer;
