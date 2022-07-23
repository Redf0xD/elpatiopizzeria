import React from 'react'
import { Button } from '../Button/Button'
import styles from '../ListaVariantes/ListaVariantes.module.scss'
import { VarianteCard } from '../VarianteCard/VarianteCard'

export const ListaVariantes = ({ variantes, setModal2, productId }) => {
  return (
    <div className={styles.container}>
      <Button setShowModal={setModal2} />
      {variantes.length === 0 ? (
        <p className={styles.noHay}>No hay variantes</p>
      ) : (
        variantes.map(v => {
          return (
            <VarianteCard
              key={v.id}
              id={v.id}
              titulo={v.titulo}
              precio={v.precio}
              productId={productId}
            />
          )
        })
      )}
    </div>
  )
}
