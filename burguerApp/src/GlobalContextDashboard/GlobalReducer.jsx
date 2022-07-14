import {
  ADD_CATEGORIES,
  DELETE_CATEGORIES,
  GET_CATEGORIES,
  MODIFY_CATEGORIES,
  ADD_PRODUCTS,
  MODIFY_PRODUCTS,
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  ADD_VARIANTS,
  DELETE_VARIANTS,
  MODIFY_VARIANTS,
} from './types';

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case DELETE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.filter((c) => c.id !== payload),
      };
    case MODIFY_CATEGORIES:
      return {
        ...state,
        categories: state.categories.map((c) => {
          return c.id === payload.id ? payload : c;
        }),
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== payload),
      };
    case MODIFY_PRODUCTS:
      return {
        ...state,
        products: state.products.map((p) => {
          return p.id === payload.id ? payload : p;
        }),
      };
    case ADD_VARIANTS:
      return {
        ...state,
        products: state.products.map((p) => {
          return p.id === payload.productoId
            ? { ...p, variantes: [...p.variantes, payload] }
            : p;
        }),
      };

    case DELETE_VARIANTS:
      return {
        ...state,
        products: state.products.map((p) => {
          return p.id === payload.productId
            ? {
                ...p,
                variantes: p.variantes.filter(
                  (v) => Number(v.id) !== Number(payload.id)
                ),
              }
            : p;
        }),
      };

    case MODIFY_VARIANTS:
      return {
        ...state,
        products: state.products.map((p) => {
          return p.id === payload.productId
            ? {
                ...p,
                variantes: p.variantes.map((v) => {
                  return v.id === payload.id ? { ...v, ...payload.data } : v;
                }),
              }
            : p;
        }),
      };

    default:
      return state;
  }
};
