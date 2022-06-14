import React, { useState, createContext } from 'react';

export const GlobalContext = createContext(null);

export const ContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  ///funciones que modifican estados

  return (
    <div>
      <GlobalContext.Provider
        value={{
          categories,
          setCategories,
          products,
          setProducts,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
