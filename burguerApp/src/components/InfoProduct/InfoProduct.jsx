import React, { useState } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Button } from '../Button/Button';
import { ContadorVariantes } from '../ContadorVariantes/ContadorVariantes';
import style from './InfoProduct.module.scss';
export const InfoProduct = ({
  title,
  image,
  description,
  price,
  setShowModal,
  id,
  variantes,
}) => {
  const { addToCart, cart } = React.useContext(GlobalContext);
  const [precioVariante, setPrecioVariante] = useState(0);
  const [infoVariantes, setInfoVariantes] = useState(
    variantes.map((v) => {
      return {
        ...v,
        nombre: v.titulo,
        cantidad: 0,
      };
    })
  );
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
    if (variantes.length > 0) {
      infoVariantes
        .filter((v) => v.cantidad > 0)
        .forEach((v) => {
          addToCart({
            ...infoCart,
            nombre: title + ' ' + v.titulo,
            cantidad: v.cantidad,
            precio: v.precio,
          });
        });
    } else {
      addToCart({ ...infoCart });
    }
    setShowModal((prev) => !prev);
  };

  const handleVariants = (id, restar) => {
    setInfoVariantes((prev) => [
      ...prev.map((v) => {
        if (v.id === id) {
          return {
            ...v,
            cantidad: v.cantidad + restar,
          };
        } else {
          return v;
        }
      }),
    ]);
  };

  return (
    <>
      <section className={style.InfoProduct}>
        <Button fill={'white'} setShowModal={setShowModal} />
        <div className={style.InfoProduct_img}>
          <img src={image} alt={title} />
        </div>
        <div className={style.InfoProduct_info}>
          <h2 className={style.info_title}>{title}</h2>
          <p className={style.info_description}>{description}</p>
          <div className={style.info_pago}>
            {variantes && variantes.length === 0 ? (
              <>
                <p className={style.info_price}>${price}</p>
                <label className={style.info_cantidad}>
                  <button
                    name='restar'
                    onClick={handleClick}
                    className={style.info_button}
                  >
                    -
                  </button>
                  <input
                    name='cantidad'
                    onChange={handleChange}
                    type='number'
                    value={infoCart.cantidad}
                    className={style.cantidad_input}
                  />
                  <button
                    name='sumar'
                    onClick={handleClick}
                    className={style.info_button}
                  >
                    +
                  </button>
                </label>
              </>
            ) : null}
          </div>
          {variantes.map((v) => {
            return (
              <ContadorVariantes
                key={v.id}
                id={v.id}
                titulo={v.titulo}
                precio={v.precio}
                handleVariants={handleVariants}
              />
            );
          })}
          <p className={style.total_price}>
            Total
            <span>
              $
              {infoCart.precio * infoCart.cantidad +
                infoVariantes.reduce(
                  (acc, variantes) =>
                    acc + variantes.cantidad * variantes.precio,
                  0
                )}
            </span>
          </p>
          <button
            disabled={
              infoCart.cantidad === 0 &&
              infoVariantes.filter((v) => v.cantidad > 0).length === 0
            }
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
