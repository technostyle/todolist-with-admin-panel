import { SET_PAGE } from "./actions";

const intialState = {
  page: 0,
};

export const paginationReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};
