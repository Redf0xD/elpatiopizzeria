// Import Swiper modules
import { Autoplay } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// Import custom styles
import styles from './Slider.module.scss'

export const Slider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
        <SwiperSlide>
          <img
            src="https://images.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
