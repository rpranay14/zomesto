import * as ActionTypes from "./ActionTypes";
const filter = {
  sortBy: "Popularity",
  cuisine: [],
  rating: 0,
  costperperson: [0, 1000],
};

export const FILTER = (state = { filter: filter, count: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FILTER:
      return { ...state, filter: action.payload };
    case ActionTypes.REMOVE_FILTER:
      return { ...state, filter: filter, count: 0 };
    case ActionTypes.UPDATE_FILTER_COUNT:
      let count = 0;
      for (const key in filter) {
        if (filter.hasOwnProperty(key) && action.payload.hasOwnProperty(key)) {
          if (key === "cuisine") {
            if (action.payload[key].length !== 0) {
              count = count + 1;
            }
          } else if (key === "costperperson") {
            if (
              JSON.stringify(action.payload[key]) !== JSON.stringify([0, 1000])
            ) {
              count = count + 1;
            }
          } else if (filter[key] !== action.payload[key]) {
            count = count + 1;
          }
        }
      }
      return { ...state, count: count };
    case ActionTypes.REMOVE_SINGLE_FILTER:
      for (const key in filter) {
        if (key === Object.keys(action.payload)[0]) {
          const newFilter = { ...state.filter, [key]: filter[key] };
          return { ...state, filter: newFilter, count: state.count - 1 };
        }
      }
    default:
      return state;
  }
};
