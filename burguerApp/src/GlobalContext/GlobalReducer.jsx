import { GET_CATEGORIES, GET_PRODUCTS, ADD_TO_CART } from './types';

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      return state;
  }
};
