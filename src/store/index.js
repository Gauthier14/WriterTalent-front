import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducer from "src/reducers";
import postsMiddleware from "../middlewares/postsMiddleware";
import userMiddleware from "../middlewares/userMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(postsMiddleware, userMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
