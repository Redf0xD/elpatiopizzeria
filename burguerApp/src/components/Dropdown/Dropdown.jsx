import React, { useState } from 'react';
import { Producto } from '../Producto/Producto';
import styles from '../Dropdown/Dropdown.module.css';

export const Dropdown = ({ title, subtitle, image, product }) => {
  const [showProducts, setShowProducts] = useState(false);
  const handleClick = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img onClick={handleClick} src={image} alt={title} />
      <div className={`${styles.productos} ${showProducts ? styles.mostrar : styles.ocultar}`}>
        {
          product?.map((product) => {
            return (
              <Producto
                key={product?.id}
                title={product?.titulo}
                image={product?.imagen}
                description={product?.descripcion}
                price={product?.precio}
              />
            );
          })}
      </div>
    </div>
  );
};
