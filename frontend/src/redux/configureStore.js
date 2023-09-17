import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { LOADINGBAR } from "./loadingbar";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      loadingBar: LOADINGBAR,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
