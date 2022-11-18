import React from 'react';
import styles from './OrderDetail.module.scss';
export const OrderDetail = ({
  nombre,
  cantidad,
  precio,
  deleteFromCart,
  modifyFromCart,
}) => {
  const modify = (nombre, e) => {
    modifyFromCart(nombre, e.target.name);
  };

  return (
    <div className={styles.orderDetail}>
      <p>{nombre}</p>
      <div className={styles.orderDetail_info}>
        <div className={styles.info_cantidad}>
          <button
            type='button'
            disabled={cantidad === 1}
            name="sub"
            onClick={(e) => modify(nombre, e)}
            className={styles.button}
          >
            -
          </button>
          <p>{cantidad}</p>
          <button
            type='button'
            name="add"
            onClick={(e) => modify(nombre, e)}
            className={styles.button}
          >
            +
          </button>
        </div>
        <p className={styles.price}>${precio * cantidad}</p>
        <button
          type='button'
          onClick={() => deleteFromCart(nombre)}
          className={styles.button}
        >
          X
        </button>
      </div>
    </div>
  );
};
