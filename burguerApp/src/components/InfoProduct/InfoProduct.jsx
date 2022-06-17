import React, { useState } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

export const InfoProduct = ({ title, image, description, price }) => {
  const { addToCart } = React.useContext(GlobalContext);
  const [infoCart, setInfoCart] = useState({
    nombre: title,
    cantidad: 0,
    precio: price,
    info: '',
  });

  const handleChange = (e) => {
    setInfoCart((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.name === 'sumar')
      setInfoCart((prev) => ({ ...prev, cantidad: prev.cantidad + 1 }));
    else if (infoCart.cantidad > 0) {
      setInfoCart((prev) => ({ ...prev, cantidad: prev.cantidad - 1 }));
    }
  };

  return (
    <>
      <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>${price}</p>
        <p>Cantidad{infoCart.cantidad}</p>
        <button name='restar' onClick={handleClick}>
          -
        </button>
        <button name='sumar' onClick={handleClick}>
          +
        </button>
        <label htmlFor='info'>Info adicional</label>
        <textarea
          onChange={handleChange}
          name='info'
          id='info'
          cols='30'
          rows='10'
        ></textarea>
        <p>{price * infoCart.cantidad}</p>

        <button
          disabled={infoCart.cantidad === 0}
          onClick={() => addToCart(infoCart)}
        >
          Agregar al pedido
        </button>
      </div>
    </>
  );
};
