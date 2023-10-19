import * as ActionTypes from "./ActionTypes";
const filter = {
  sortBy: "Popularity",
  cuisine: null,
  rating: null,
  costperperson: null,
};

export const FILTER = (state = filter, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FILTER:
      if (action.payload.sortBy) {
        const newFilter = { ...state, sortBy: action.payload.sortBy };
        console.log(newFilter, "newFilter");

        return newFilter;
      }
    default:
      return state;
  }
};
