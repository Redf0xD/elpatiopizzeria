import React from 'react'
import { Dropdowns } from '../../components/Dropdowns/Dropdowns'
import { Header } from '../../components/Header/Header'
import { Slider } from '../../components/Slider/Slider'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pattern}></div>
      <main className={styles.main}>
        <Slider />
        <Header />
        <Dropdowns />
      </main>
    </div>
  )
}
