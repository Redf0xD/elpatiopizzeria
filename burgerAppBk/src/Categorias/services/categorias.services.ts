import db from "../../db/sequelize.js";
const {categorias} = db.models;


export async function obtenerCategorias(){
   return await categorias.findAll(); 
}