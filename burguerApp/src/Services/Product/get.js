export const obtenerCategorias = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/categorias');
  let data = await res.json();
  return data;
};

export const obtenerProductos = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let product = await fetch(`${url}` + '/productos');
  let data = await product.json();

  return data;
};
