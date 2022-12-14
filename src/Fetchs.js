// let token = localStorage.getItem('token');
import { storage } from "./firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

export const subirImagen = async (imagen) => {
  const fileReference = ref(storage, "ElPatioPizzeria/" + imagen.name);
  const task = await uploadBytes(fileReference, imagen);
  const obtenerUrl = await getDownloadURL(task.ref);
  return obtenerUrl;
};

export const deleteOldImages = async (urlImagen) => {
  const fileReference = ref(storage, urlImagen);
  try {
    await deleteObject(fileReference);
  } catch (e) {
    alert("Ha ocurrido un error");
  }
};

// export const subirImagen = async (imagen) => {
//   let data = new FormData();
//   data.append("imagen", imagen);
//   const url = import.meta.env.VITE_APP_IMGSVR;
//   let res = await fetch(`${url}/imagen`, {
//     method: "POST",
//     body: data,
//   });
//   let imagenRes = await res.json();
//   return imagenRes;
// };

export const obtenerCategorias = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/categorias/getCategorias`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: import.meta.env.VITE_CLIENT_TOKEN,
    }),
  });
  let categorias = await res.json();
  return categorias;
};

export const agregarCategorias = async (categoria) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/categorias`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria),
  });
  let categoriaRes = await res.json();
  return categoriaRes;
};

export const borrarCategorias = async (id) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/categorias/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  let categoriaBorrada = await res.json();
  return categoriaBorrada;
};

export const modificarCategorias = async (id, categoriaModificada) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/categorias/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoriaModificada),
  });
  let categoriaModificadaRes = await res.json();
  return categoriaModificadaRes;
};

export const obtenerProductos = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/productos/getProductos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: import.meta.env.VITE_CLIENT_TOKEN,
    }),
  });
  let productos = await res.json();
  console.log({productos})
  return productos;
};

export const agregarProductos = async (producto) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/productos`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });
  let productoRes = await res.json();
  return productoRes;
};

export const borrarProductos = async (id) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/productos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  let productoBorrado = await res.json();
  return productoBorrado;
};

export const modificarProductos = async (id, productoModificado) => {
  const url = import.meta.env.VITE_APP_URL;
  console.log({ productoModificado })
  let res = await fetch(`${url}/productos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productoModificado),
  });
  let productoModificadoRes = await res.json();
  console.log({ productoModificadoRes })
  return productoModificadoRes;
};

export const validarPassword = async (password) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/auth/ingresar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(password),
  });
  let loginRes = await res.json();
  return loginRes;
};

export const obtenerVariantes = async (id) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/variantes/getVariantes/` + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: import.meta.env.VITE_CLIENT_TOKEN,
    }),
  });
  let variantes = await res.json();
  return variantes;
};

export const agregarVariantes = async (body) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/variantes`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  let agregarVariantesRes = await res.json();
  return agregarVariantesRes;
};

export const borrarVariantes = async (id) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/variantes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  let varianteBorrada = await res.json();
  return varianteBorrada;
};

export const modificarVariantes = async (id, varianteModificada) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/variantes/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(varianteModificada),
  });
  let varianteModificadaRes = await res.json();
  return varianteModificadaRes;
};
