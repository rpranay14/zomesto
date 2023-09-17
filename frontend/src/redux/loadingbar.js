import * as ActionTypes from "./ActionTypes";

export const LOADINGBAR = (state = { loadingProgress: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LOADINGBAR:
      return { ...state, loadingProgress: action.payload };
    default:
      return state;
  }
};
