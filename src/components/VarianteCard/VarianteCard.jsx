import React, { useContext, useState } from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext'
import swal from 'sweetalert2'
import { AiOutlineEdit } from 'react-icons/ai'
import { EditVariant } from '../EditVariant/EditVariant'
import { Modal } from '../Modal/Modal'
import styles from './VarianteCard.module.scss'

export const VarianteCard = ({ id, titulo, precio, productId }) => {
  const { deleteVariants } = useContext(GlobalContext)
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    swal
      .fire({
        title: '¿Estas seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      })
      .then(result => {
        if (result.value) {
          deleteVariants(id, productId)
        }
      })
      .catch(() => {})
  }

  const handleEditClick = () => {
    setModal(true)
  }

  return (
    <div className={styles.container}>
      <div>
        <p>{titulo}</p>
        <p>$ {precio}</p>
      </div>
      <div className={styles.editDelete}>
        <button className={styles.eliminar} onClick={handleClick}>
          <RiDeleteBin2Fill />
        </button>
        <button className={styles.editar} onClick={handleEditClick}>
          <AiOutlineEdit />
        </button>
      </div>
      {modal ? (
        <Modal>
          <EditVariant
            setModal={setModal}
            titulo={titulo}
            precio={precio}
            id={id}
            productId={productId}
          />
        </Modal>
      ) : null}
    </div>
  )
}
