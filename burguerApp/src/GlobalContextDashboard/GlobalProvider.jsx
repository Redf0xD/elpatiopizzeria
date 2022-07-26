import React, { useReducer } from 'react'
import { GlobalContext } from './GlobalContext'
import { reducer } from './GlobalReducer'
import { useNavigate } from 'react-router-dom'
import {
  obtenerCategorias,
  agregarCategorias,
  borrarCategorias,
  modificarCategorias,
  obtenerProductos,
  agregarProductos,
  borrarProductos,
  modificarProductos,
  agregarVariantes,
  borrarVariantes,
  modificarVariantes
} from '../Fetchs'
import {
  GET_CATEGORIES,
  DELETE_CATEGORIES,
  ADD_CATEGORIES,
  MODIFY_CATEGORIES,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
  MODIFY_PRODUCTS,
  ADD_PRODUCTS,
  ADD_VARIANTS,
  DELETE_VARIANTS,
  MODIFY_VARIANTS
} from './types'

export const ContextProvider = ({ children }) => {
  // Estado inicial
  const initialState = {
    categories: [],
    products: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate();

  ///funciones que modifican estados
  const setCategories = () => {
    obtenerCategorias()
      .then(data => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: GET_CATEGORIES,
          payload: data
        })
      })
      .catch(err => console.log(err))
  }

  const addCategories = categoria => {
    agregarCategorias(categoria)
      .then(data => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: ADD_CATEGORIES,
          payload: data
        })
      })
      .catch(err => console.log(err))
  }

  const deleteCategories = id => {
    borrarCategorias(id)
      .then((data) => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: DELETE_CATEGORIES,
          payload: id
        })
      })
      .catch(err => console.log(err))
  }

  const modifyCategories = (id, categoriaModificada) => {
    modificarCategorias(id, categoriaModificada)
      .then(data => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: MODIFY_CATEGORIES,
          payload: data
        })
      })
      .catch(err => console.log(err))
  }

  const getProducts = () => {
    obtenerProductos()
      .then(data => {
        dispatch({
          type: GET_PRODUCTS,
          payload: data
        })
      })
      .catch(err => console.log(err))
  }

  const addProducts = producto => {
    agregarProductos(producto)
      .then(data => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: ADD_PRODUCTS,
          payload: data
        })
      })
      .catch(err => console.log(err))
  }

  const deleteProducts = id => {
    borrarProductos(id)
      .then((data) => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: DELETE_PRODUCTS,
          payload: id
        })
      })
      .catch(err => console.log(err))
  }

  const modifyProducts = (id, productoModificado) => {
    modificarProductos(id, productoModificado)
      .then(data => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: MODIFY_PRODUCTS,
          payload: data
        })
      })
      .catch(err => console.log(err))
  }

  const addVariants = variante => {
    agregarVariantes(variante).then(data => {
      if(data.error) return navigate("/ingresar");
      dispatch({
        type: ADD_VARIANTS,
        payload: data
      })
    })
  }

  const deleteVariants = (id, productId) => {
    borrarVariantes(id)
      .then((data) => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: DELETE_VARIANTS,
          payload: { id, productId }
        })
      })
      .catch(err => console.log(err))
  }

  const modifyVariants = (id, varianteModificada, productId) => {
    modificarVariantes(id, varianteModificada, productId)
      .then(data => {
        if(data.error) return navigate("/ingresar");
        dispatch({
          type: MODIFY_VARIANTS,
          payload: { data, id, productId }
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <GlobalContext.Provider
        value={{
          categories: state.categories,
          products: state.products,
          cart: state.cart,
          setCategories,
          addCategories,
          deleteCategories,
          modifyCategories,
          getProducts,
          addProducts,
          deleteProducts,
          modifyProducts,
          addVariants,
          deleteVariants,
          modifyVariants
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  )
}
