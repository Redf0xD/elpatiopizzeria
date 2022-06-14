import { Express } from "express"
import categoriasRouter from "./Categorias/routes/categorias.routes.js"


export default (app:Express)=>{
    app.use("/categorias",categoriasRouter);

}