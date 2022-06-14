import React from 'react';
import styles from './Dropdowns.module.css';
import { obtenerCategorias } from '../../Services/Product/get';
import { useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Dropdown } from '../Dropdown/Dropdown';

export const Dropdowns = () => {
  const { categories, setCategories } = React.useContext(GlobalContext);

  useEffect(() => {
    obtenerCategorias()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('esta cat?', categories);
  return (
    <div className={styles.conteiner}>
      {categories?.map((category) => {
        return (
          <Dropdown
            key={category?.id}
            title={category?.titulo}
            subtitle={category?.subtitulo}
            image={category?.imagen}
          />
        );
      })}
    </div>
  );
};
