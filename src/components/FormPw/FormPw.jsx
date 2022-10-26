import { useState } from "react";
import { validarPassword } from "../../Fetchs";
import Swal from "sweetalert2";
import styles from "./FormPw.module.scss";
import { useNavigate } from "react-router-dom";

export const FormPw = () => {
  const [form, setForm] = useState({ nombre: "", clave: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pw = await validarPassword(form);
    if (pw.token) {
      window.localStorage.setItem("token", pw.token);
      navigate("/dashboard/categorias");
    } else {
      Swal.fire({
        title: "Error",
        text: "Contraseña incorrecta",
        icon: "error",
        confirmButtonText: "Reintentar",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="contraseña" className={styles.form_label}>
        Ingrese usuario para acceder
        <input
          type="text"
          onChange={handleChange}
          name="nombre"
          value={form.nombre}
          className={styles.form_input}
        />
      </label>
      <label htmlFor="contraseña" className={styles.form_label}>
        Ingrese contraseña para acceder
        <input
          type="password"
          onChange={handleChange}
          name="clave"
          value={form.clave}
          className={styles.form_input}
        />
      </label>
      <button className={styles.form_button}>Ingresar</button>
    </form>
  );
};
