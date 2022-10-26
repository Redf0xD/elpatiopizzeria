import React from "react";
import { Button } from "../Button/Button";
import styles from "./Googlemaps.module.scss";

export const Googlemaps = ({ setModal }) => {
  return (
    <div className={styles.container}>
      <Button setShowModal={setModal} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.139238270871!2d-64.458034!3d-31.437833499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc5ed51ec8791b4e!2sel%20patio%20pizzeria!5e0!3m2!1ses!2sve!4v1666743848450!5m2!1ses!2sve"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
