import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';
import menuReducer from './menu';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
