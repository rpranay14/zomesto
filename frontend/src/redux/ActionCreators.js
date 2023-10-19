import * as ActionTypes from "./ActionTypes";

export const setLoadingProgress = (progress) => ({
  type: ActionTypes.CHANGE_LOADINGBAR,
  payload: progress,
});

export const addFilter = (filter) => ({
  type: ActionTypes.ADD_FILTER,
  payload: filter,
});
export const removeFIlter = () => ({
  type: ActionTypes.REMOVE_FILTER,
});
