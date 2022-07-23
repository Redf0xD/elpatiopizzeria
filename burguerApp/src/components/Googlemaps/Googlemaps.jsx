import React from 'react';
import { useWidth } from '../../hooks/useWidth';

export const Googlemaps = () => {
  const {width} = useWidth()
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8684719835096!2d-58.569716299999996!3d-34.607487299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb83c6951b127%3A0x8ee77a3707f2ebd5!2sGral.%20Hornos%202785%2C%20B1678HPE%20Hurlingham%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1657564145544!5m2!1ses-419!2sar'
        width={width}
        height='450'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};
