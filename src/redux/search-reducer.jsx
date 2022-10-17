import { accessoriesData, homeData, shoesData } from "./data";

const SEARCHED = "SEARCHED";
const FILTERED = "FILTERED";

let initialState = {
  searched: null,
  searchings: [homeData, shoesData, accessoriesData],
  filtered: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED:
      return {
        ...state,
        searched: (state.searched = action.payload),
      };
    case FILTERED:
      return {
        ...state,
        filtered: (state.filtered = action.payload),
      };

    default:
      return state;
  }
};

export const searchingItem = (payload) => {
  return {
    type: SEARCHED,
    payload,
  };
};

export const filteredItem = (payload) => {
  return {
    type: FILTERED,
    payload,
  };
};

export default searchReducer;
