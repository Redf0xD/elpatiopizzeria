import React, { useState } from 'react';

export const ContadorVariantes = ({
  titulo,
  precio,
  cambiarPrecioVariantes,
}) => {
  const [cantidad, setCantidad] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.name === 'sumar') {
      cambiarPrecioVariantes(precio);
      setCantidad((prev) => {
        return prev + 1;
      });
    } else if (cantidad > 0) {
      cambiarPrecioVariantes(-precio);
      setCantidad((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={handleClick} name='sumar'>
        +
      </button>
      <button onClick={handleClick} name='restar'>
        -
      </button>
      <p>{precio}</p>
      <p>{cantidad}</p>
    </div>
  );
};
