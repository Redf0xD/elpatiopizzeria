import React, { useState } from 'react';
import { InfoProduct } from '../InfoProduct/InfoProduct';
// import { HiPlusSm } from 'react-icons/hi';
import { Modal } from '../Modal/Modal';
import styles from './Producto.module.scss';

export const Producto = ({ title, image, description, price, id }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <InfoProduct
            title={title}
            image={image}
            description={description}
            price={price}
            setShowModal={setShowModal}
            id={id}
          />
        </Modal>
      )}
      <section onClick={(e) => e.stopPropagation()} className={styles.product}>
        <div className={styles.product_info}>
          <h2 className={styles.product_title}>{title}</h2>
          <p className={styles.product_description}>{description}</p>
          <p className={styles.product_price}>${price}</p>
          <button className={styles.product_button} onClick={handleClick}>
            Pedir +
          </button>
        </div>
        <div className={styles.product_img}>
          <img src={image} alt={title} />
        </div>
      </section>
    </>
  );
};
