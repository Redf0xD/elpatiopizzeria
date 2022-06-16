import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { BsFillShareFill } from 'react-icons/bs';
import Logoperfil from '../../Images/Logoperfil.png';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_img_container}>
        <img src={Logoperfil} alt="Logo de perfil" />
      </div>
      <h1 className={styles.header_title}>burgerApp</h1>
      <p className={styles.header_text}>¡Las mejores de la zona!</p>
      <div className={styles.header_social}>
        <FaWhatsapp />
        <IoIosCall />
        <BsFillShareFill />
      </div>
    </header>
  );
};
