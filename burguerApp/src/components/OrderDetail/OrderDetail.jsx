import React from 'react';

export const OrderDetail = ({
  nombre,
  cantidad,
  precio,
  id,
  deleteFromCart,
  modifyFromCart,
}) => {
  const modify = (nombre, e) => {
    modifyFromCart(nombre, e.target.name);
  };

  return (
    <div>
      <div key={id}>
        <p>{nombre}</p>
        <p>{cantidad}</p>
        <p>{precio}</p>
        <button onClick={() => deleteFromCart(nombre)}>Eliminar</button>
        <button name='add' onClick={(e) => modify(nombre, e)}>
          +
        </button>
        <button
          disabled={cantidad === 1}
          name='sub'
          onClick={(e) => modify(nombre, e)}
        >
          -
        </button>
        <h3>Total: {precio * cantidad}</h3>
      </div>
    </div>
  );
};
