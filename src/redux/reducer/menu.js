import * as actionTypes from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      return { ...state, [id]: (state[id] || 0) + 1 };
    default:
      return state;
  }
}
