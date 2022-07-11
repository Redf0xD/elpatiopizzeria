import React from 'react';
import { Dropdowns } from '../../components/Dropdowns/Dropdowns';
import { Googlemaps } from '../../components/Googlemaps/Googlemaps';
import { Header } from '../../components/Header/Header';

export const Home = () => {
  return (
    <main>
      <Header />
      <Dropdowns />
      <Googlemaps />
    </main>
  );
};
