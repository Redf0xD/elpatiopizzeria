import React from 'react';

export const Horarios = ({ setModal }) => {
  const handleClick = () => {
    setModal(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Cerrar</button>
      <ul>
        <li>
          <p>Lunes</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li>
          <p>Martes</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li>
          <p>Miércoles</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li>
          <p>Jueves</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li>
          <p>Viernes</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li>
          <p>Sábado</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li>
          <p>Domingo</p>
          <p>De 11:00 a 23:30</p>
        </li>
      </ul>
    </div>
  );
};
