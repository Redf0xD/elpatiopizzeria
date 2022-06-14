export const obtenerCategorias = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/categorias');
  let data = await res.json();
  console.log(data);
};
