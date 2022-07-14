import { useContext, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillEdit, AiFillEye } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContextDashboard/GlobalContext';
import Swal from 'sweetalert2';
import { Modal } from '../Modal/Modal';
import { FormEditProduct } from '../FormEditProduct/FormEditProduct';
import styles from './ProductosCard.module.scss';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ListaVariantes } from '../ListaVariantes/ListaVariantes';
import { FormAddVariante } from '../FormAddVariante/FormAddVariante';

export const ProductosCard = ({
  id,
  title,
  description,
  image,
  price,
  categoryId,
  variantes,
}) => {
  const { deleteProducts } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const handleClick = () => {
    Swal.fire({
      title: '¿Quieres eliminar el producto?',
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
        deleteProducts(id);
        Swal.fire('Exitoso', '', 'success');
      }
    });
  };

  const handleEditClick = () => {
    setModal(true);
  };

  return (
    <section className={styles.producto}>
      <div className={styles.product_info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <div className={styles.editarEliminar}>
          <button className={styles.eliminar} onClick={handleClick}>
            <RiDeleteBinLine />
          </button>
          <button onClick={handleEditClick} className={styles.editar}>
            <AiFillEdit />
          </button>
        </div>
        <div>
          <button onClick={() => setModal3(true)}>
            <IoIosAddCircleOutline />
          </button>

          {modal3 ? (
            <Modal>
              <FormAddVariante id={id} setModal3={setModal3} />
            </Modal>
          ) : null}
          <button onClick={() => setModal2(true)}>
            <AiFillEye />
          </button>
        </div>
      </div>
      <div className={styles.img}>
        <img src={image} alt='' />
      </div>
      {modal ? (
        <Modal>
          <FormEditProduct
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            image={image}
            categoryId={categoryId}
            setShowModal={setModal}
          />
        </Modal>
      ) : null}
      {modal2 ? (
        <Modal>
          <ListaVariantes
            variantes={variantes}
            setModal2={setModal2}
            productId={id}
          />
        </Modal>
      ) : null}
    </section>
  );
};
