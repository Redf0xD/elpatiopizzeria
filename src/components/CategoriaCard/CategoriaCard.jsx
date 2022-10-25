import React, { useState } from 'react';
import { useContext } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext';
import Swal from 'sweetalert2';
import { Modal } from '../Modal/Modal';
import { FormEditCategory } from '../FormEditCategory/FormEditCategory';
import styles from './CategoriaCard.module.scss';

export const CategoriaCard = ({ title, subtitle, id }) => {
  const { deleteCategories } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    Swal.fire({
      title: '¿Quieres eliminar la categoría?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategories(id);
        Swal.fire('Exitoso', '', 'success');
      }
    });
  };

  const handleEditClick = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className={styles.categoria}>
      <div className={styles.editarEliminar}>
        <button onClick={handleClick} className={styles.borrar}>
          <RiDeleteBinLine />
        </button>
        <button onClick={handleEditClick} className={styles.editar}>
          <AiFillEdit />
        </button>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {modal ? (
        <Modal>
          <FormEditCategory
            id={id}
            title={title}
            subtitle={subtitle}
            setShowModal={setModal}
          />
        </Modal>
      ) : null}
    </div>
  );
};
