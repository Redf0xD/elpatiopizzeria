import React, { useState, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import { BiCart } from 'react-icons/bi';
import swal from 'sweetalert';
import styles from './cart.module.css';
export const Cart = () => {
  const { deleteFromCart, modifyFromCart, cart } =
    React.useContext(GlobalContext);
  const [infoFinal, setInfoFinal] = useState({
    nombre: '',
    'Forma de entrega': 'delivery',
    'Dirección de entrega': '',
    'Detalle de entrega': '',
    'Fecha de entrega': '',
    'Hora de entrega': '',
    'Metodo de pago': '',
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
      swal('Error', errores, 'error');
      return;
    }
    var link = document.createElement('a');
    let info =
      'Hola Luciano Burgers! Quiero hacer un pedido, este es el detalle: ';
    {
      cart.forEach((p) => {
        info += `\n${p.nombre} x${p.cantidad} - $${p.precio} ★ `;
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
  };

  const handleError = () => {
    if (infoFinal['Forma de entrega'] === '') {
      return 'Por favor, seleccione una forma de entrega';
    } else if (infoFinal['Detalle de entrega'] === '') {
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
    <div>
      <button onClick={() => setShowCart((prev) => !prev)}>
        {!showCart ? 'Mostrar' : 'Ocultar'}
      </button>
      {showCart ? (
        <form
          className={`${styles.cartDetail} ${styles.active}`}
          onSubmit={handleSubmit}
        >
          <h2>Detalles del pedido</h2>
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
          <h3>Formas de entrega</h3>
          <label htmlFor=''></label>
          <label htmlFor='delivery'>Delivery</label>
          <input
            onChange={handleChange}
            value='delivery'
            type='radio'
            id='delivery'
            name='Forma de entrega'
            defaultChecked
          />

          <label htmlFor='takeaway'>Take Away</label>
          <input
            onChange={handleChange}
            value='take away'
            type='radio'
            id='takeaway'
            name='Forma de entrega'
          />

          <label>
            Nombre de quien{' '}
            {infoFinal['Forma de entrega'] === 'delivery' ? 'recibe' : 'retira'}
            <input onChange={handleChange} type='text' name='nombre' required />
          </label>
          {infoFinal['Forma de entrega'] === 'delivery' && (
            <label>
              Dirección de entrega completa
              <input
                onChange={handleChange}
                name='Dirección de entrega'
                type='text'
                required
              />
            </label>
          )}
          <h3>
            ¿Cuando{' '}
            {infoFinal['Forma de entrega'] === 'delivery'
              ? 'te lo enviamos'
              : 'lo retirás'}
            ?
          </h3>
          <label htmlFor='una fecha y hora'>En una fecha y hora</label>
          <input
            onChange={handleChange}
            value='una fecha y hora'
            type='radio'
            id='una fecha y hora'
            name='Detalle de entrega'
          />
          {infoFinal['Detalle de entrega'] === 'una fecha y hora' && (
            <>
              <label>Fecha</label>
              <input
                onChange={handleChange}
                name='Fecha de entrega'
                type='date'
                required
                min={new Date().toISOString().split('T')[0]}
                max='2040-12-31'
              />
              <label>Hora</label>
              <input
                onChange={handleChange}
                name='Hora de entrega'
                type='time'
                required
              />
            </>
          )}
          <label htmlFor='Lo antes posible'>Lo antes posible</label>
          <input
            onChange={handleChange}
            value='lo antes posible'
            type='radio'
            id='loantesposible'
            name='Detalle de entrega'
          />

          <h3 htmlFor='Metodo de pago'>Método de pago</h3>
          <label htmlFor='efectivo'>Efectivo</label>
          <input
            type='radio'
            onChange={handleChange}
            name='Metodo de pago'
            value='efectivo'
            id='efectivo'
          />
          <label htmlFor='mercado pago'>Mercado Pago</label>
          <input
            type='radio'
            onChange={handleChange}
            name='Metodo de pago'
            value='mercado pago'
            id='mercadopago'
          />
          <label htmlFor='tarjeta de debito'>Tarjeta de débito</label>
          <input
            type='radio'
            onChange={handleChange}
            name='Metodo de pago'
            value='tarjeta de debito'
            id='tarjetadedebito'
          />
          <label htmlFor='tarjeta de credito'>Tarjeta de crédito</label>
          <input
            type='radio'
            onChange={handleChange}
            name='Metodo de pago'
            value='tarjeta de credito'
            id='tarjetadecredito'
          />

          <p>Total General:{infoFinal.totalGeneral}</p>
          {/* Que quede estatico abajo (ricky) */}
          <button>CONFIRMAR PEDIDO</button>
        </form>
      ) : (
        <p>
          <BiCart />
          {cart.length}
        </p>
      )}
    </div>
  );
};
