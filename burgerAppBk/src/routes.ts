import { Express } from "express";
import categoriasRouter from "./Categorias/routes/categorias.routes.js";
import productosRouter from "./Productos/routes/productos.routes.js";


export default (app:Express)=>{
    app.use("/categorias",categoriasRouter);
    app.use("/productos",productosRouter);

}