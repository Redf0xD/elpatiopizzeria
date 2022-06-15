import React from 'react';
import styles from './Dropdowns.module.css';
import { useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Dropdown } from '../Dropdown/Dropdown';

export const Dropdowns = () => {
  const { categories, setCategories } = React.useContext(GlobalContext);
  const { products, setProducts } = React.useContext(GlobalContext);

  useEffect(() => {
    setCategories();
    setProducts();
  }, []);

  // console.log('llega producto?', products);

  return (
    <main className={styles.conteiner}>
      {categories?.map((category) => {
        return (
          <Dropdown
            key={category?.id}
            title={category?.titulo}
            subtitle={category?.subtitulo}
            image={category?.imagen}
            product={products?.filter(
              (product) => product?.categoriaId === category?.id
            )}
          />
        );
      })}
    </main>
  );
};
