import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext'
import { Button } from '../Button/Button'
import styles from './EditVariant.module.scss'

export const EditVariant = ({ titulo, precio, productId, id, setModal }) => {
  const { modifyVariants } = useContext(GlobalContext)
  const [variante, setVariante] = useState({
    titulo: titulo,
    precio: precio
  })

  const handleSubmit = e => {
    e.preventDefault()
    modifyVariants(id, variante, productId)
    setModal(false)
  }

  const handleChange = e => {
    setVariante({
      ...variante,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Button setShowModal={setModal} />
      <label className={styles.label}>
        Titulo de la variante
        <input
          type="text"
          name="titulo"
          className={styles.input}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Precio
        <input
          type="number"
          name="precio"
          className={styles.input}
          onChange={handleChange}
          required
        />
      </label>
      <button className={styles.button} disabled={variante.precio <= 0}>
        Agregar variante
      </button>
    </form>
  )
}
