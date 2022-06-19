import React from 'react';
import { Cart } from '../../components/Cart/Cart';
import { Dropdowns } from '../../components/Dropdowns/Dropdowns';
import { Header } from '../../components/Header/Header';

export const Home = () => {
  return (
    <div>
      <Header />
      <Dropdowns />
      <Cart />
    </div>
  );
};
