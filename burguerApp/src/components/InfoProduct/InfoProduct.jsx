import React, { useState } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import style from './InfoProduct.module.scss';
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
      <section className={style.InfoProduct}>
        <div className={style.InfoProduct_img}>
          <img src={image} alt={title} />
        </div>
        <div className={style.InfoProduct_info}>
          <h2 className={style.info_title}>{title}</h2>
          <p className={style.info_description}>{description}</p>
          <div className={style.info_pago}>
            <p className={style.info_price}>${price}</p>
            <label className={style.info_cantidad}>
              <button
                name="restar"
                onClick={handleClick}
                className={style.info_button}
              >
                -
              </button>
              <input
                name="cantidad"
                onChange={handleChange}
                type="number"
                value={infoCart.cantidad}
                className={style.cantidad_input}
              />
              <button
                name="sumar"
                onClick={handleClick}
                className={style.info_button}
              >
                +
              </button>
            </label>
          </div>
          <p className={style.total_price}>
            Total <span>${price * infoCart.cantidad}</span>
          </p>

          <button
            disabled={infoCart.cantidad === 0}
            onClick={handleSubmit}
            className={style.button}
          >
            Agregar al pedido
          </button>
        </div>
      </section>
    </>
  );
};
