import { combineReducers } from "redux";

import postsReducer from "./posts";
import userReducer from "./user";
import menuReducer from "./menu";
import editorReducer from "./editor";
import regiterReducer from "./register";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  menu: menuReducer,
  editor: editorReducer,
  register: regiterReducer,
});

export default rootReducer;
