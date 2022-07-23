import React, { useState } from 'react'
import style from './ContadorVariantes.module.scss'

export const ContadorVariantes = ({ titulo, precio, handleVariants, id }) => {
  const [cantidad, setCantidad] = useState(0)
  const handleClick = e => {
    e.stopPropagation()
    if (e.target.name === 'sumar') {
      handleVariants(id, 1)
      setCantidad(prev => {
        return prev + 1
      })
    } else if (cantidad > 0) {
      handleVariants(id, -1)
      setCantidad(prev => {
        return prev - 1
      })
    }
  }

  return (
    <div className={style.info_pago}>
      <div>
        <p>{titulo}</p>
        <p>{precio}</p>
      </div>
      <div className={style.info_cantidad}>
        <button
          className={style.info_button}
          onClick={handleClick}
          name="restar"
        >
          -
        </button>
        <p className={style.cantidad}>{cantidad}</p>
        <button
          className={style.info_button}
          onClick={handleClick}
          name="sumar"
        >
          +
        </button>
      </div>
    </div>
  )
}
