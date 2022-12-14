import React, { useState, useContext, useRef } from "react";
import { GlobalContext } from "../../GlobalContextDashboard/GlobalContext";
import Swal from "sweetalert2";
import { subirImagen, deleteOldImages } from "../../Fetchs";
import styles from "./FormEditProduct.module.scss";
import { Button } from "../Button/Button";

export const FormEditProduct = ({
  title,
  description,
  price,
  image,
  categoryId,
  id,
  setShowModal,
  available
}) => {
  const { modifyProducts, categories } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [producto, setProducto] = useState({
    titulo: title,
    descripcion: description,
    precio: price,
    imagen: image,
    categoriaId: categoryId,
    disponible: available
  });
  const url = import.meta.env.VITE_APP_IMGSVR;
  const inputImage = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    modifyProducts(id, { ...producto });
    Swal.fire({
      title: "Exitoso!",
      text: "Haz click para continuar",
      icon: "success",
      confirmButtonText: "Aceptar"
    });
    setShowModal(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "disponible") {
      setProducto({
        ...producto,
        [e.target.name]: e.target.checked
      });
    } else {
      setProducto({
        ...producto,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleUploadImage = async () => {
    setLoading(true);
    const res = await subirImagen(inputImage.current.files[0]);
    deleteOldImages(producto.imagen);
    setProducto({ ...producto, imagen: res });
    setLoading(false);
  };

  return (
    <div className={styles.form}>
      <Button setShowModal={setShowModal} />
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label className={styles.label}>
          Título de producto
          <input
            type="text"
            onChange={handleChange}
            name="titulo"
            value={producto.titulo}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Descripción
          <textarea
            type="text"
            onChange={handleChange}
            name="descripcion"
            value={producto.descripcion}
            className={styles.text}
          />
        </label>
        <label className={styles.label}>
          Precio
          <input
            type="number"
            onChange={handleChange}
            name="precio"
            value={producto.precio}
            className={styles.input}
          />
        </label>
        <select
          onChange={handleChange}
          name="categoriaId"
          id="categoriaId"
          defaultValue={producto.categoriaId}
          className={styles.select}
        >
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.titulo}
              </option>
            );
          })}
        </select>
        <div className={styles.labelH}>
          <p>Disponible</p>
          <div className={styles.toggle}>
            <input
              type="checkbox"
              id="switch"
              defaultChecked={producto.disponible}
              onChange={handleChange}
              name="disponible"
            />
            <label htmlFor="switch"></label>
          </div>
        </div>
        <div className={styles.img}>
          <img className="img" src={producto.imagen} alt="imagen" />
        </div>
        <label className={styles.inputFile}>
          Selecciona un archivo...
          <input
            type="file"
            id="imagen"
            name="imagen"
            onChange={handleUploadImage}
            ref={inputImage}
          />
        </label>
        <button className={styles.button} disabled={loading}>
          Aceptar
        </button>
      </form>
    </div>
  );
};
