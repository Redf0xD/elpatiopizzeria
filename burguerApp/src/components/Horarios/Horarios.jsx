import React from 'react'
import styles from './Horarios.module.scss'
export const Horarios = () => {
  return (
    <div onClick={e => e.stopPropagation()} className={styles.div}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p>Lunes</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li className={styles.item}>
          <p>Martes</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li className={styles.item}>
          <p>Miércoles</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li className={styles.item}>
          <p>Jueves</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li className={styles.item}>
          <p>Viernes</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li className={styles.item}>
          <p>Sábado</p>
          <p>De 11:00 a 23:30</p>
        </li>
        <li className={styles.item}>
          <p>Domingo</p>
          <p>De 11:00 a 23:30</p>
        </li>
      </ul>
    </div>
  )
}
