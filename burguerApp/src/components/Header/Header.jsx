import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { BsFillShareFill } from 'react-icons/bs';
import Logoperfil from '../../Images/Logoperfil.png';

export const Header = () => {
  return (
    <div className="">
      <img className="" src={Logoperfil} alt="Logo de perfil" />
      <h1 className="">burgerApp</h1>
      <p className="">¡Las mejores de la zona!</p>
      <FaWhatsapp />
      <IoIosCall />
      <BsFillShareFill />
    </div>
  );
};
