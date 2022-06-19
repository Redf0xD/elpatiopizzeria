import React, { useState } from 'react';
import { Producto } from '../Producto/Producto';
import styles from './Dropdown.module.scss';

export const Dropdown = ({ title, subtitle, image, product }) => {
  const [showProducts, setShowProducts] = useState(false);
  const handleClick = () => {
    setShowProducts(!showProducts);
  };

  return (
<<<<<<< HEAD
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img onClick={handleClick} src={image} alt={title} />
      <div className={`${styles.productos} ${showProducts ? styles.mostrar : styles.ocultar}`}>
        {
=======
    <article className={styles.article}>
      <h2 className={styles.article_title}>{title}</h2>
      {subtitle ? (
        <h3 className={styles.article_subtitle}>{subtitle}</h3>
      ) : null}
      <div className=''>
        <img onClick={handleClick} src={image} alt={title} />
      </div>
      <section className=''>
        {showProducts &&
>>>>>>> e9eefa6899d09909d848865dc97d41d1b22b42f8
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
      </section>
    </article>
  );
};
