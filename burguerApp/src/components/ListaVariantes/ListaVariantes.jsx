import React from 'react';
import { useEffect } from 'react';
import styles from '../ListaVariantes/ListaVariantes.module.css';
import { VarianteCard } from '../VarianteCard/VarianteCard';

export const ListaVariantes = ({ variantes, setModal2, productId }) => {
  return (
    <div>
      <button onClick={() => setModal2(false)}>X</button>

      {variantes.length === 0 ? (
        <p>No hay variantes</p>
      ) : (
        variantes.map((v) => {
          return (
            <VarianteCard
              key={v.id}
              id={v.id}
              titulo={v.titulo}
              precio={v.precio}
              productId={productId}
            />
          );
        })
      )}
    </div>
  );
};
