import { combineReducers } from "redux";

import postsReducer from "./posts";
import userReducer from "./user";
import menuReducer from "./menu";

const rootReducer = combineReducers({
  recipes: postsReducer,
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
