import React from 'react';
import { useEffect, useState } from 'react';
// import { spam } from '../../Fetchs';

export const ProductFilter = () => {
  const [renderizar, setRenderizar] = useState('');
  useEffect(() => {
    setRenderizar('algo');
    // spam();
  }, [renderizar]);

  return <div>ProductFilter</div>;
};
