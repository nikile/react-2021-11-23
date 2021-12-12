import * as actionTypes from './constants';

export const increment = (id) => ({ type: actionTypes.INCREMENT, id });
export const decrement = (id) => ({ type: actionTypes.DECREMENT, id });
export const removeFromBasket = (id) => ({
  type: actionTypes.REMOVE_PRODUCT_FROM_BASKET,
  id,
});
