import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { LOADINGBAR } from "./loadingbar";
import { FILTER } from "./filter";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      loadingBar: LOADINGBAR,
      filter: FILTER,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
