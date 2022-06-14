import { Router,Request,Response } from "express";
import {obtenerProductos} from "../services/productos.services.js"
const router = Router();

router.get("/",async (req:Request,res:Response) => {
    try {
        const productos = await obtenerProductos();
        res.json(productos);
    } catch (error) {
        
    }
})

export default router;