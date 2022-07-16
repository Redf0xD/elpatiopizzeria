import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext';
import swal from 'sweetalert2';

export const FormAddVariante = ({ id, setModal3 }) => {
  const { addVariants } = useContext(GlobalContext);
  const [variante, setVariante] = useState({
    titulo: '',
    precio: '',
    productoId: id,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addVariants(variante);
    swal.fire('Exitoso', '', 'success');
    setModal3(false);
  };

  const handleChange = (e) => {
    setVariante({
      ...variante,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button onClick={() => setModal3(false)}>X</button>
      <form onSubmit={handleSubmit}>
        <label>Titulo de la variante</label>
        <input type='text' name='titulo' onChange={handleChange} required />
        <label>Precio</label>
        <input type='number' name='precio' onChange={handleChange} required />
        <button disabled={variante.precio <= 0}>Agregar variante</button>
      </form>
    </div>
  );
};
