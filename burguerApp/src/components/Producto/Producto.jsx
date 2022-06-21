import React, { useState } from 'react';
import { InfoProduct } from '../InfoProduct/InfoProduct';
import { Modal } from '../Modal/Modal';

export const Producto = ({ title, image, description, price }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <InfoProduct
            title={title}
            image={image}
            description={description}
            price={price}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
      <div onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={handleClick}>Pedir +</button>
      </div>
    </>
  );
};
