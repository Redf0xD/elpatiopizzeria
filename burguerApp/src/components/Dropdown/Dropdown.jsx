import React from 'react';
import styles from './Dropdown.module.css';
import { obtenerCategorias } from '../../Services/Product/get';
import { useEffect } from 'react';

export const Dropdown = () => {
  useEffect(() => {
    obtenerCategorias();
  });

  return (
    <div className={styles.conteiner}>
      <div>
        <h1>Promos</h1>
        <p>Disfruta de los mejores precios</p>
      </div>
      <div>
        <h1>Burgers</h1>
      </div>
      <div>
        <h1>Panchos</h1>
        <p>Probá nuestro super pancho de un metro!</p>
      </div>
      <div>
        <h1>Papas </h1>
      </div>
      <div>
        <h1>Nuggets</h1>
      </div>
      <div>
        <h1>Bebidas</h1>
      </div>
    </div>
  );
};
