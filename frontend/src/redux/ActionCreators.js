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
export const updateFilterCount = (filter) => ({
  type: ActionTypes.UPDATE_FILTER_COUNT,
  payload: filter,
});
export const removeSingleFilter = (filter) => ({
  type: ActionTypes.REMOVE_SINGLE_FILTER,
  payload: filter,
});
