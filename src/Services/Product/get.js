export const obtenerCategorias = async () => {
  const url = import.meta.env.VITE_APP_URL;
  console.log({ url, obtenerCategorias: "Categorias" });
  let res = await fetch(`${url}/categorias/getCategorias`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: "2f311e2ad368746601b8f703965b261768b618dba7a84c2752aba20c7f624a0a",
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
      token: "2f311e2ad368746601b8f703965b261768b618dba7a84c2752aba20c7f624a0a",
    }),
  });
  let productos = await res.json();
  return productos;
};
