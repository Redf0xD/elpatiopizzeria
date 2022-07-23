import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { BsFillShareFill } from 'react-icons/bs';
import Logoperfil from '../../Images/Logoperfil.png';
import styles from './Header.module.scss';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { Horarios } from '../Horarios/Horarios';
import { Modal } from '../Modal/Modal';
import { MdDeliveryDining } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { useEffect } from 'react';

const horarios = {
  lunes: { de: '11:00', hasta: '23:30' },
  martes: { de: '11:00', hasta: '23:30' },
  miercoles: { de: '11:00', hasta: '23:30' },
  jueves: { de: '11:00', hasta: '23:30' },
  viernes: { de: '11:00', hasta: '23:30' },
  sabado: { de: '11:00', hasta: '23:30' },
  domingo: { de: '11:00', hasta: '23:30' },
};

const openOrClosed = () => {
  const fechaActual = new Date();
  if (!horarios[getDayString(fechaActual.getDay())]) {
    return 'Cerrado';
  } else {
    const horaActual = fechaActual.getHours();
    const minutosActual = fechaActual.getMinutes();
    const horaDeApertura =
      horarios[getDayString(fechaActual.getDay())].de.split(':')[0];
    const minutosDeApertura =
      horarios[getDayString(fechaActual.getDay())].de.split(':')[1];
    const horaDeCierre =
      horarios[getDayString(fechaActual.getDay())].hasta.split(':')[0];
    const minutosDeCierre =
      horarios[getDayString(fechaActual.getDay())].hasta.split(':')[1];
    if (
      horaActual < horaDeApertura ||
      (horaActual === horaDeApertura && minutosActual < minutosDeApertura)
    ) {
      return 'Cerrado';
    } else if (
      horaActual > horaDeCierre ||
      (horaActual === horaDeCierre && minutosActual > minutosDeCierre)
    ) {
      return 'Cerrado';
    } else {
      return 'Abierto';
    }
  }
};

const getDayString = (numero) => {
  switch (numero) {
    case 0:
      return 'domingo';
    case 1:
      return 'lunes';
    case 2:
      return 'martes';
    case 3:
      return 'miercoles';
    case 4:
      return 'jueves';
    case 5:
      return 'viernes';
    case 6:
      return 'sabado';
    default:
      return 'domingo';
  }
};

const shareData = {
  title: 'burgerApp',
  text: 'Compartí la app',
  url: 'https://localhost:3030',
};

const handleClick = () => {
  navigator.share(shareData);
};

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [horarios, setHorarios] = useState(openOrClosed());
  const handleHourClick = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setTimeout(() => {
      setHorarios(openOrClosed());
    }, 60000);
  }, [horarios]);

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
        <div className={styles.icons}>
          <p className={styles.delivery}>
            Delivery <MdDeliveryDining />
          </p>
          <button className={styles.horario} onClick={handleHourClick}>
            {horarios} <BiTimeFive />
          </button>
          {modal && (
            <Modal setModal={setModal}>
              <Horarios setModal={setModal} />
            </Modal>
          )}
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
        <a
          href='https://www.facebook.com'
          className={styles.button}
          target='_blank'
        >
          <BsFacebook />
        </a>
        <a
          href='https://www.instagram.com'
          className={styles.button}
          target='_blank'
        >
          <AiFillInstagram />
        </a>
        <button onClick={handleClick} className={styles.button}>
          <BsFillShareFill />
        </button>
      </div>
    </header>
  );
};
