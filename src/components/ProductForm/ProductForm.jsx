import React, { useState, useRef } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContextDashboard/GlobalContext";
import Swal from "sweetalert2";
import { subirImagen } from "../../Fetchs";
import styles from "./ProductForm.module.scss";
import { Button } from "../Button/Button";
import { Loading } from "../Loading/Loading";

export const ProductForm = ({ setShowModal }) => {
  const { addProducts, categories } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    imagen: "",
    categoriaId: "",
  });

  const inputImage = useRef(null);
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imagen = await subirImagen(inputImage.current.files[0]);
    await addProducts({ ...producto, imagen });
    setLoading(false);
    Swal.fire({
      title: "Exitoso!",
      text: "Haz click para continuar",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    setShowModal(false);
    // window.location.reload();
  };

  return (
    <div className={styles.form}>
      {loading ? <Loading /> : null}
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
          <input
            type="text"
            onChange={handleChange}
            name="descripcion"
            value={producto.descripcion}
            className={styles.input}
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
          className={styles.select}
          onChange={handleChange}
          name="categoriaId"
          id="categorias"
        >
          <option value="-1">Todas</option>
          {categories.map((c) => {
            return (
              <option value={c.id} key={c.id}>
                {c.titulo}
              </option>
            );
          })}
        </select>
        <label>
          Imagen
          <input
            ref={inputImage}
            type="file"
            name="imagen"
            onChange={handleChange}
            value={producto.imagen}
            className={styles.inputFile}
          />
        </label>
        <button
          className={styles.button}
          disabled={
            !producto.titulo ||
            !producto.descripcion ||
            !producto.precio ||
            !producto.imagen ||
            !producto.categoriaId
          }
        >
          Aceptar
        </button>
      </form>
    </div>
  );
};
