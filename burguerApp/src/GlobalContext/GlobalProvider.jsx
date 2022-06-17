import React, { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { reducer } from './GlobalReducer';
import { obtenerCategorias, obtenerProductos } from '../Services/Product/get';
import { GET_CATEGORIES, GET_PRODUCTS, ADD_TO_CART } from './types';

export const ContextProvider = ({ children }) => {
  // Estado inicial
  const initialState = {
    categories: [],
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  ///funciones que modifican estados
  const setCategories = () => {
    obtenerCategorias()
      .then((data) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const setProducts = () => {
    obtenerProductos()
      .then((data) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (order) => {
    dispatch({
      type: ADD_TO_CART,
      payload: order,
    });
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          categories: state.categories,
          products: state.products,
          cart: state.cart,
          setCategories,
          setProducts,
          addToCart,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};
