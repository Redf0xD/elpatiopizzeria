import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { BsFillShareFill } from 'react-icons/bs';
import Logoperfil from '../../Images/Logoperfil.png';
import styles from './Header.module.scss';

const shareData = {
  title: 'burgerApp',
  text: 'Compartí la app',
  url: 'https://localhost:3030',
};

const handleClick = () => {
  navigator.share(shareData);
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_flex_row}>
        <div className={styles.header_img_container}>
          <img src={Logoperfil} alt='Logo de perfil' />
        </div>
        <div className={styles.header_flex_column}>
          <h1 className={styles.header_title}>burgerApp</h1>
          <p className={styles.header_text}>¡Las mejores de la zona!</p>
        </div>
      </div>
      <div className={styles.header_social}>
        <a
          href='https://wa.me/+5491149166103?text=%C2%A1Hola%20quiero%20hacer%2C%20una%20consulta%20!'
          className={styles.button}
          target='_blank'
        >
          <FaWhatsapp />
        </a>
        <a href='tel:+5491149166103' className={styles.button} target='_blank'>
          <IoIosCall />
        </a>
        <button onClick={handleClick} className={styles.button}>
          <BsFillShareFill />
        </button>
      </div>
    </header>
  );
};
