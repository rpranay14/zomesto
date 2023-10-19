import * as ActionTypes from "./ActionTypes";
const filter = {
  sortBy: "Popularity",
  cuisine: [],
  rating: 0,
  costperperson: [0, 1000],
};

export const FILTER = (state = { filter: filter }, action) => {
  let newFilter;
  switch (action.type) {
    case ActionTypes.ADD_FILTER:
      return { ...state, filter: action.payload };
    case ActionTypes.REMOVE_FILTER:
      return { ...state, filter: filter };
    default:
      return state;
  }
};
