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
  let data = await res.json();
  return data;
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
