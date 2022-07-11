import React, { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { reducer } from './GlobalReducer';
import { obtenerVariantes } from '../Fetchs';
import { obtenerCategorias, obtenerProductos } from '../Services/Product/get';
import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  MODIFY_FROM_CART,
  GET_VARIANTS,
} from './types';

export const ContextProvider = ({ children }) => {
  // Estado inicial
  const initialState = {
    categories: [],
    products: [],
    cart: [],
    variants: [],
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

  const deleteFromCart = (nombre) => {
    dispatch({
      type: DELETE_FROM_CART,
      payload: nombre,
    });
  };

  const modifyFromCart = (nombre, accion) => {
    dispatch({
      type: MODIFY_FROM_CART,
      payload: { nombre, accion },
    });
  };

  const getVariants = (id) => {
    obtenerVariantes(id)
      .then((data) => {
        dispatch({
          type: GET_VARIANTS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          categories: state.categories,
          products: state.products,
          cart: state.cart,
          variants: state.variants,
          setCategories,
          setProducts,
          addToCart,
          deleteFromCart,
          modifyFromCart,
          getVariants,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};
