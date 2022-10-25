// Import Swiper modules
import { Autoplay, EffectFade } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';
// Import custom styles
import styles from './Slider.module.scss'
// Import dependencys
import { useState, useEffect } from 'react'
import { Horarios } from '../Horarios/Horarios.jsx'
import { Modal } from '../Modal/Modal'
import { Googlemaps } from '../Googlemaps/Googlemaps'
import { MdDeliveryDining, MdLocationOn } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'

const horarios = {
  lunes: { de: '11:00', hasta: '23:30' },
  martes: { de: '11:00', hasta: '23:30' },
  miercoles: { de: '11:00', hasta: '23:30' },
  jueves: { de: '11:00', hasta: '23:30' },
  viernes: { de: '11:00', hasta: '23:30' },
  sabado: { de: '11:00', hasta: '23:30' },
  domingo: { de: '11:00', hasta: '23:30' }
}

const openOrClosed = () => {
  const fechaActual = new Date()
  if (!horarios[getDayString(fechaActual.getDay())]) {
    return 'Cerrado'
  } else {
    const horaActual = fechaActual.getHours()
    const minutosActual = fechaActual.getMinutes()
    const horaDeApertura =
      horarios[getDayString(fechaActual.getDay())].de.split(':')[0]
    const minutosDeApertura =
      horarios[getDayString(fechaActual.getDay())].de.split(':')[1]
    const horaDeCierre =
      horarios[getDayString(fechaActual.getDay())].hasta.split(':')[0]
    const minutosDeCierre =
      horarios[getDayString(fechaActual.getDay())].hasta.split(':')[1]
    if (
      horaActual < horaDeApertura ||
      (horaActual === horaDeApertura && minutosActual < minutosDeApertura)
    ) {
      return 'Cerrado'
    } else if (
      horaActual > horaDeCierre ||
      (horaActual === horaDeCierre && minutosActual > minutosDeCierre)
    ) {
      return 'Cerrado'
    } else {
      return 'Abierto'
    }
  }
}

const getDayString = numero => {
  switch (numero) {
    case 0:
      return 'domingo'
    case 1:
      return 'lunes'
    case 2:
      return 'martes'
    case 3:
      return 'miercoles'
    case 4:
      return 'jueves'
    case 5:
      return 'viernes'
    case 6:
      return 'sabado'
    default:
      return 'domingo'
  }
}
export const Slider = () => {
  const [modal, setModal] = useState(false)
  const [map, setMap] = useState(false)
  const [horarios, setHorarios] = useState(openOrClosed())
  const handleHourClick = () => {
    setModal(!modal)
  }
  useEffect(() => {
    setTimeout(() => {
      setHorarios(openOrClosed())
    }, 60000)
  }, [horarios])

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className={styles.slider}
      >
        <SwiperSlide>
          <img
            src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.cocinayvino.com/wp-content/uploads/2021/03/www.cocinayvino.com-araxi-burger-10-anos-de-hamburguesas-y-mucho-mas-argentina-burger-e1615839960743-1200x900.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.icons}>
        <button
          onClick={() => setMap(prev => !prev)}
          className={styles.ubicanos}
        >
          Ubícanos <MdLocationOn />
        </button>
        <p className={styles.delivery}>
          Delivery <MdDeliveryDining />
        </p>
        <button
          className={
            horarios === 'Cerrado' ? styles.horarioClose : styles.horarioOpen
          }
          onClick={handleHourClick}
        >
          {horarios} <BiTimeFive />
        </button>
        {modal && (
          <Modal setModal={setModal}>
            <Horarios setModal={setModal} />
          </Modal>
        )}{' '}
        {map && (
          <Modal setModal={setMap}>
            <Googlemaps setModal={setMap} />
          </Modal>
        )}
      </div>
    </div>
  )
}
