import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  MODIFY_FROM_CART,
} from './types';

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
      const exist = state.cart.find((item) => item.nombre === payload.nombre);
      return {
        ...state,
        cart: !exist
          ? [...state.cart, payload]
          : state.cart.map((item) => {
              if (item.nombre === payload.nombre) {
                return {
                  ...item,
                  cantidad: item.cantidad + payload.cantidad,
                };
              }
              return item;
            }),
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.nombre !== payload),
      };
    case MODIFY_FROM_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.nombre === payload.nombre) {
            if (payload.accion === 'add') {
              item.cantidad++;
            } else {
              item.cantidad--;
            }
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
