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
      if (action.payload.sortBy) {
        newFilter = { ...state.filter, sortBy: action.payload.sortBy };
      } else if (action.payload.rating) {
        newFilter = { ...state.filter, rating: action.payload.rating };
      } else if (action.payload.costperperson) {
        newFilter = {
          ...state.filter,
          costperperson: action.payload.costperperson,
        };
      } else if (action.payload.cuisine) {
        let cuisine;
        if (state.filter.cuisine.includes(action.payload.cuisine)) {
          cuisine = state.filter.cuisine.filter(
            (cuisine) => cuisine !== action.payload.cuisine
          );
        } else {
          cuisine = [...state.filter.cuisine, action.payload.cuisine];
        }
        newFilter = {
          ...state.filter,
          cuisine: cuisine,
        };
      }

      return { ...state, filter: newFilter };
    default:
      return state;
  }
};
