import React, { useState } from 'react';
import { Producto } from '../Producto/Producto';
import styles from './Dropdown.module.scss';
import { FaChevronDown } from 'react-icons/fa';

export const Dropdown = ({ title, subtitle, image, product }) => {
  const [showProducts, setShowProducts] = useState(false);
  const handleClick = () => {
    setShowProducts(!showProducts);
  };

  console.log(product);

  return (
    <article className={styles.article}>
      <div
        onClick={handleClick}
        className={`${styles.article_info} ${
          showProducts ? styles.article_info_active : ''
        }`}
      >
        <h2 className={styles.article_title}>{title}</h2>
        {subtitle ? (
          <h3 className={styles.article_subtitle}>{subtitle}</h3>
        ) : null}
        <FaChevronDown
          className={`${styles.article_arrow} ${
            showProducts ? styles.article_arrow_rotate : ''
          }`}
        />
        <div className={styles.article_img}>
          <img src={image} alt={title} />
        </div>
      </div>
      <section className={styles.product} onClick={(e) => e.stopPropagation()}>
        {showProducts &&
          product?.map((product) => {
            return (
              <Producto
                key={product?.id}
                title={product?.titulo}
                image={product?.imagen}
                description={product?.descripcion}
                variantes={product?.variantes}
                price={product?.precio}
                id={product?.id}
              />
            );
          })}
      </section>
    </article>
  );
};
