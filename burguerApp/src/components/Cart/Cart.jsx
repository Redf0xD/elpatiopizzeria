import React, { useState, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { deleteFromCart, modifyFromCart, cart } =
    React.useContext(GlobalContext);
  const [infoFinal, setInfoFinal] = useState({
    nombre: '',
    'Forma de envío': '',
    'Dirección de envío': '',
    'Detalle de envío': '',
    'Fecha de envío': '',
    'Hora de envío': '',
    'Metodo de pago': '',
    totalGeneral: 0,
  });

  useEffect(() => {
    const totalGeneral = cart.reduce((total, order) => {
      return total + order.precio * order.cantidad;
    }, 0);
    setInfoFinal((prev) => ({ ...prev, totalGeneral }));
  }, [cart]);

  const handleChange = (e) => {
    setInfoFinal({ ...infoFinal, [e.target.name]: e.target.value });
    if (
      e.target.name === 'Detalle de envío' &&
      e.target.value === 'loantesposible'
    ) {
      setInfoFinal((prev) => ({
        ...prev,
        'Fecha de envío': '',
        'Hora de envío': '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var link = document.createElement('a');
    let info =
      'Hola Luciano Burgers! Quiero hacer un pedido, este es el detalle:';
    {
      cart.forEach((p) => {
        info += `\n${p.nombre} x${p.cantidad} - $${p.precio} ★ `;
      });
    }
    for (let prop in infoFinal) {
      if (prop === 'totalGeneral') {
        info += ` Total: $${infoFinal[prop]}`;
      } else {
        info += ` ${prop} : ${infoFinal[prop]} || `;
      }
    }
    link.href =
      'https://api.whatsapp.com/send/?phone=5401149166103&text=' + info;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label htmlFor='delivery'>Delivery</label>
      <input
        onChange={handleChange}
        value='delivery'
        type='radio'
        id='delivery'
        name='Forma de envío'
      />

      <label htmlFor='takeaway'>Take Away</label>
      <input
        onChange={handleChange}
        value='take away'
        type='radio'
        id='takeaway'
        name='Forma de envío'
      />

      <label>
        Nombre de quien{' '}
        {infoFinal['Forma de envío'] === 'delivery' ? 'recibe' : 'retira'}
        <input onChange={handleChange} type='text' name='nombre' />
      </label>
      {infoFinal['Forma de envío'] === 'delivery' && (
        <label>
          Dirección de envío completa
          <input
            onChange={handleChange}
            name='Dirección de envío'
            type='text'
          />
        </label>
      )}
      <label>
        ¿Cuando{' '}
        {infoFinal['Forma de envío'] === 'delivery'
          ? 'te lo enviamos'
          : 'lo retirás'}
        ?
      </label>
      <label htmlFor='una fecha y hora'>En una fecha y hora</label>
      <input
        onChange={handleChange}
        value='una fecha y hora'
        type='radio'
        id='una fecha y hora'
        name='Detalle de envío'
      />
      {infoFinal['Detalle de envío'] === 'una fecha y hora' && (
        <>
          <label>Fecha</label>
          <input
            onChange={handleChange}
            name='Fecha de envío'
            type='date'
            required
          />
          <label>Hora</label>
          <input
            onChange={handleChange}
            name='Hora de envío'
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
        name='Detalle de envío'
      />

      <label htmlFor='Metodo de pago'>Método de pago</label>
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
  );
};
