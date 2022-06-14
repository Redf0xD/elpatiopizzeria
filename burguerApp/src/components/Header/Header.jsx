import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { BsFillShareFill } from 'react-icons/bs';
import Logoperfil from '../../Images/Logoperfil.png';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.conteiner}>
      <img className={styles.logo} src={Logoperfil} alt='Logo de perfil' />
      <h1 className={styles.title}>burgerApp</h1>
      <p className={styles.description}>¡Las mejores de la zona!</p>
      <FaWhatsapp />
      <IoIosCall />
      <BsFillShareFill />
    </div>
  );
};
