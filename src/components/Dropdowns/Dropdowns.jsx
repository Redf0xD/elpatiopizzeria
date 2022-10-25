import React from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './Dropdowns.module.scss';

export const Dropdowns = () => {
  const { categories, setCategories } = React.useContext(GlobalContext);
  const { products, setProducts } = React.useContext(GlobalContext);

  useEffect(() => {
    setCategories();
    setProducts();
  }, []);

  return (
    <main className={styles.main}>
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
