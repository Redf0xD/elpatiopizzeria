import React, { useState, useContext, useEffect } from 'react'
import { InfoProduct } from '../InfoProduct/InfoProduct'
// import { HiPlusSm } from 'react-icons/hi';
import { Modal } from '../Modal/Modal'
import styles from './Producto.module.scss'
import { GlobalContext } from '../../GlobalContext/GlobalContext'

export const Producto = ({
  title,
  image,
  description,
  price,
  id,
  variantes
}) => {
  const { getVariants } = React.useContext(GlobalContext)
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    getVariants(id)
  }, [])

  return (
    <>
      {showModal && (
        <Modal>
          <InfoProduct
            title={title}
            image={image}
            variantes={variantes}
            description={description}
            price={price}
            setShowModal={setShowModal}
            id={id}
          />
        </Modal>
      )}
      <section onClick={e => e.stopPropagation()} className={styles.product}>
        <div className={styles.product_info}>
          <h2 className={styles.product_title}>{title}</h2>
          <p className={styles.product_description}>{description}</p>
          <div className={styles.variant}>
            {variantes && variantes.length > 0 ? (
              variantes.map(variante => (
                <div key={variante.id}>
                  <p>{variante.titulo}</p>
                  <p className={styles.product_price}>${variante.precio}</p>
                </div>
              ))
            ) : (
              <p className={styles.product_price}>${price}</p>
            )}
          </div>
          <button className={styles.product_button} onClick={handleClick}>
            Pedir +
          </button>
        </div>
        <div className={styles.product_img}>
          <img src={image} alt={title} />
        </div>
      </section>
    </>
  )
}
