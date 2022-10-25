import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { ContadorVariantes } from '../ContadorVariantes/ContadorVariantes';

export const Variantes = ({ id, cambiarPrecioVariantes }) => {
  const { getVariants, variants } = useContext(GlobalContext);
  useEffect(() => {
    getVariants(id);
  }, []);
  return (
    <div>
      {variants.map((v) => {
        return (
          <ContadorVariantes
            cambiarPrecioVariantes={cambiarPrecioVariantes}
            precio={v.precio}
            key={v.id}
            titulo={v.titulo}
          />
        );
      })}
    </div>
  );
};
