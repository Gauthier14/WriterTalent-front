/* eslint-disable comma-dangle */
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducer from "src/reducers";
import registerMiddleware from "../middlewares/registerMiddleware";
import postsMiddleware from "../middlewares/postsMiddleware";
import userMiddleware from "../middlewares/userMiddleware";
import menuMiddleware from "../middlewares/menuMiddleware";
import editorMiddleware from "../middlewares/editorMiddleware";
import viewerMiddleware from "../middlewares/viewerMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    postsMiddleware,
    userMiddleware,
    menuMiddleware,
    registerMiddleware,
    editorMiddleware,
    viewerMiddleware,
  )
);

const store = createStore(reducer, enhancers);

export default store;
