import React, { useState } from 'react';
import { Producto } from '../Producto/Producto';

export const Dropdown = ({ title, subtitle, image, product }) => {
  const [showProducts, setShowProducts] = useState(false);

  const handleClick = () => {
    setShowProducts(!showProducts);
  };

  return (
    <article>
      <h2>{title}</h2>
      {subtitle ? <h3>{subtitle}</h3> : null}
      <img onClick={handleClick} src={image} alt={title} />
      <section className="">
        {showProducts &&
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
