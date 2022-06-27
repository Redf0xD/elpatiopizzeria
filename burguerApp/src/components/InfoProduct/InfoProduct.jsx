import React, { useState } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

export const InfoProduct = ({
  title,
  image,
  description,
  price,
  setShowModal,
}) => {
  const { addToCart } = React.useContext(GlobalContext);
  const [infoCart, setInfoCart] = useState({
    nombre: title,
    cantidad: 0,
    precio: price,
  });

  const handleChange = (e) => {
    setInfoCart({ ...infoCart, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.name === 'sumar')
      setInfoCart((prev) => ({ ...prev, cantidad: prev.cantidad + 1 }));
    else if (infoCart.cantidad > 0) {
      setInfoCart((prev) => ({ ...prev, cantidad: prev.cantidad - 1 }));
    }
  };

  const handleSubmit = () => {
    addToCart(infoCart);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <section>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>${price}</p>
        <label>
          Cantidad
          <input
            name="cantidad"
            onChange={handleChange}
            type="number"
            value={infoCart.cantidad}
          />
        </label>
        <button name="restar" onClick={handleClick}>
          -
        </button>
        <button name="sumar" onClick={handleClick}>
          +
        </button>
        <p>${price * infoCart.cantidad}</p>

        <button disabled={infoCart.cantidad === 0} onClick={handleSubmit}>
          Agregar al pedido
        </button>
      </section>
    </>
  );
};
