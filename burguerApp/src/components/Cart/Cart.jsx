import React, { useState, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import { Modal } from '../Modal/Modal';
import { FiShoppingBag } from 'react-icons/fi';
import swal from 'sweetalert2';
import { BsCheck } from 'react-icons/bs';
import styles from './cart.module.scss';
import { Button } from '../Button/Button.jsx';
export const Cart = () => {
  const { deleteFromCart, modifyFromCart, cart } =
    React.useContext(GlobalContext);
  const [infoFinal, setInfoFinal] = useState({
    nombre: '',
    'Forma de entrega': 'delivery',
    'Dirección de entrega': '',
    'Detalle de entrega': '',
    'Fecha de entrega': 'lo antes posible',
    'Hora de entrega': '',
    'Metodo de pago': 'efectivo',
    'Datos adicionales': '',
    totalGeneral: 0,
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const totalGeneral = cart.reduce((total, order) => {
      return total + order.precio * order.cantidad;
    }, 0);
    setInfoFinal((prev) => ({ ...prev, totalGeneral }));
  }, [cart]);

  const handleChange = (e) => {
    setInfoFinal({ ...infoFinal, [e.target.name]: e.target.value });
    if (
      e.target.name === 'Detalle de entrega' &&
      e.target.value === 'lo antes posible'
    ) {
      setInfoFinal((prev) => ({
        ...prev,
        'Fecha de entrega': '',
        'Hora de entrega': '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = handleError();
    if (errores) {
      new swal('Error', errores, 'error');
      return;
    }
    var link = document.createElement('a');
    let info =
      'Hola Luciano Burgers! Quiero hacer un pedido, este es el detalle: ';
    {
      cart.forEach((p) => {
        info += `\n${p.nombre} x${p.cantidad} - $${p.precio} ★ - `;
      });
    }
    for (let prop in infoFinal) {
      if (infoFinal[prop] !== '') {
        if (prop === 'totalGeneral') {
          info += ` Total: $${infoFinal[prop]}`;
        } else {
          info += ` ${prop} : ${infoFinal[prop]} || `;
        }
      }
    }

    link.href =
      'https://api.whatsapp.com/send/?phone=5401149166103&text=' + info;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    setShowCart((prev) => !prev);
  };

  const handleError = () => {
    if (infoFinal['Forma de entrega'] === '') {
      return 'Por favor, seleccione una forma de entrega';
    } else if (infoFinal['Fecha de entrega'] === '') {
      return 'Por favor, ingrese cuando se lo enviamos';
    } else if (infoFinal['Metodo de pago'] === '') {
      return 'Por favor, seleccione un metodo de pago';
    } else if (infoFinal['totalGeneral'] === 0) {
      return 'Por favor, agregue al menos un producto';
    } else {
      return '';
    }
  };

  return (
    <>
      {cart.length > 0 && (
        <button
          className={styles.cart}
          onClick={() => setShowCart((prev) => !prev)}
        >
          <FiShoppingBag />
          <p>${infoFinal.totalGeneral}</p>
        </button>
      )}
      {showCart && (
        <Modal setShowModal={setShowCart} fill={'black'}>
          {cart.length > 0 ? (
            <form className={styles.cartDetail} onSubmit={handleSubmit}>
              <Button setShowModal={setShowCart} />
              <h2 className={styles.cartDetail_title}>Detalles del pedido</h2>
              {cart.map((order) => {
                return (
                  <OrderDetail
                    key={order.nombre}
                    nombre={order.nombre}
                    cantidad={order.cantidad}
                    precio={order.precio}
                    deleteFromCart={deleteFromCart}
                    modifyFromCart={modifyFromCart}
                  />
                );
              })}
              <p>Formas de entrega</p>
              <label htmlFor='delivery' className={styles.label}>
                Delivery
                <input
                  onChange={handleChange}
                  value='delivery'
                  type='radio'
                  id='delivery'
                  name='Forma de entrega'
                  defaultChecked
                />
              </label>

              <label htmlFor='takeaway' className={styles.label}>
                Take Away
                <input
                  onChange={handleChange}
                  value='take away'
                  type='radio'
                  id='takeaway'
                  name='Forma de entrega'
                />
              </label>

              <label>
                Nombre de quien{' '}
                {infoFinal['Forma de entrega'] === 'delivery'
                  ? 'recibe'
                  : 'retira'}
                <input
                  onChange={handleChange}
                  type='text'
                  name='nombre'
                  required
                  className={styles.input}
                />
              </label>
              {infoFinal['Forma de entrega'] === 'delivery' && (
                <label>
                  Dirección de entrega completa
                  <input
                    onChange={handleChange}
                    name='Dirección de entrega'
                    type='text'
                    required
                    className={styles.input}
                  />
                </label>
              )}
              <p>
                ¿Cuando{' '}
                {infoFinal['Forma de entrega'] === 'delivery'
                  ? 'te lo enviamos'
                  : 'lo retirás'}
                ?
              </p>
              <label htmlFor='una fecha y hora' className={styles.label}>
                En una fecha y hora
                <input
                  onChange={handleChange}
                  value='una fecha y hora'
                  type='radio'
                  id='una fecha y hora'
                  name='Detalle de entrega'
                />
              </label>
              {infoFinal['Detalle de entrega'] === 'una fecha y hora' && (
                <>
                  <label>
                    Fecha
                    <input
                      onChange={handleChange}
                      name='Fecha de entrega'
                      type='date'
                      required
                      min={new Date().toISOString().split('T')[0]}
                      max='2040-12-31'
                    />
                  </label>
                  <label>
                    Hora
                    <input
                      onChange={handleChange}
                      name='Hora de entrega'
                      type='time'
                      required
                    />
                  </label>
                </>
              )}
              <label htmlFor='Lo antes posible' className={styles.label}>
                Lo antes posible
                <input
                  onChange={handleChange}
                  value='lo antes posible'
                  type='radio'
                  id='lo antes posible'
                  name='Detalle de entrega'
                  defaultChecked
                />
              </label>

              <p>Método de pago</p>
              <label htmlFor='efectivo' className={styles.label}>
                Efectivo
                <input
                  type='radio'
                  onChange={handleChange}
                  name='Metodo de pago'
                  value='efectivo'
                  id='efectivo'
                  defaultChecked
                />
              </label>
              <label htmlFor='mercado pago' className={styles.label}>
                Mercado Pago
                <input
                  type='radio'
                  onChange={handleChange}
                  name='Metodo de pago'
                  value='mercado pago'
                  id='mercado pago'
                />
              </label>
              <label htmlFor='tarjeta de debito' className={styles.label}>
                Tarjeta de débito
                <input
                  type='radio'
                  onChange={handleChange}
                  name='Metodo de pago'
                  value='tarjeta de debito'
                  id='tarjeta de debito'
                />
              </label>
              <label htmlFor='tarjeta de credito' className={styles.label}>
                Tarjeta de crédito
                <input
                  value='tarjeta de credito'
                  type='radio'
                  onChange={handleChange}
                  name='Metodo de pago'
                  id='tarjeta de credito'
                />
              </label>
              <label htmlFor='textarea' className={styles.label}>
                Datos adicionales
                <textarea
                  onChange={handleChange}
                  type='text'
                  id='textarea'
                  name='Datos adicionales'
                  placeholder='Ej: Si querés quitar algun ingrediente'
                />
              </label>
              <div className={styles.confirmar}>
                <p>
                  Total: <span>${infoFinal.totalGeneral}</span>
                </p>
                {/* Que quede estatico abajo (ricky) */}
                <button>
                  <BsCheck />
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </form>
          ) : (
            <div className={styles.noProduct}>
              No hay productos para mostrar
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
