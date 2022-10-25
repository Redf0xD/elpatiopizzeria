import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext'
import swal from 'sweetalert2'
import { Button } from '../Button/Button'
import styles from './FormAddVariante.module.scss'

export const FormAddVariante = ({ id, setModal3 }) => {
  const { addVariants } = useContext(GlobalContext)
  const [variante, setVariante] = useState({
    titulo: '',
    precio: '',
    productoId: id
  })
  const handleSubmit = e => {
    e.preventDefault()
    addVariants(variante)
    swal.fire('Exitoso', '', 'success')
    setModal3(false)
  }

  const handleChange = e => {
    setVariante({
      ...variante,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Button setShowModal={setModal3} />
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
