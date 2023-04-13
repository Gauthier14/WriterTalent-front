import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import recipesMiddleware from '../middlewares/recipesMiddleware';
import  userMiddleware from '../middlewares/userMiddleware';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipesMiddleware, userMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
