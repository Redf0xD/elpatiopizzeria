import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext';

export const EditVariant = ({ titulo, precio, productId, id, setModal }) => {
  const { modifyVariants } = useContext(GlobalContext);
  const [variante, setVariante] = useState({
    titulo: titulo,
    precio: precio,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyVariants(id, variante, productId);
    setModal(false);
  };

  const handleChange = (e) => {
    setVariante({
      ...variante,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button onClick={() => setModal(false)}>X</button>
      <form onSubmit={handleSubmit}>
        <label>Titulo de la variante</label>
        <input
          type='text'
          name='titulo'
          value={variante.titulo}
          onChange={handleChange}
        />
        <label>Precio</label>
        <input
          type='number'
          name='precio'
          value={variante.precio}
          onChange={handleChange}
        />
        <button>Editar variante</button>
      </form>
    </div>
  );
};
