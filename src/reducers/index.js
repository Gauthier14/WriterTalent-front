import { combineReducers } from "redux";

import postsReducer from "./posts";
import userReducer from "./user";
import menuReducer from "./menu";
import messagesReducer from "./messages";
import viewerReducer from "./viewer";
import regiterReducer from "./register";
import editorReducer from "./editor";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  menu: menuReducer,
  messages: messagesReducer,
  viewer: viewerReducer,
  register: regiterReducer,
  editor: editorReducer,
});

export default rootReducer;
