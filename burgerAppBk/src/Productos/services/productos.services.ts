import db from "../../db/sequelize.js";
const {productos,categorias} = db.models;



export async function obtenerProductos() {
    return await productos.findAll();
}