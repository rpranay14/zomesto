import * as ActionTypes from "./ActionTypes";

export const setLoadingProgress = (progress) => ({
  type: ActionTypes.CHANGE_LOADINGBAR,
  payload: progress,
});
