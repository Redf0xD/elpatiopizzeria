import React from 'react'
import { Dropdowns } from '../../components/Dropdowns/Dropdowns'
import { Googlemaps } from '../../components/Googlemaps/Googlemaps'
import { Header } from '../../components/Header/Header'
import { Slider } from '../../components/Slider/Slider'

export const Home = () => {
  return (
    <main>
      <Header />
      <Slider />
      <Dropdowns />
      <Googlemaps />
    </main>
  )
}
