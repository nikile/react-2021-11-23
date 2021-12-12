import * as actionTypes from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case actionTypes.INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case actionTypes.DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case actionTypes.REMOVE_PRODUCT_FROM_BASKET:
      return { ...state, [id]: 0 };
    default:
      return state;
  }
}
