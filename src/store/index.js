/* eslint-disable comma-dangle */
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducer from "src/reducers";
import postsMiddleware from "../middlewares/postsMiddleware";
import userMiddleware from "../middlewares/userMiddleware";
import menuMiddleware from "../middlewares/menuMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(postsMiddleware, userMiddleware, menuMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
