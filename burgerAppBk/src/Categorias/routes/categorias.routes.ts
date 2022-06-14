import { Router,Request,Response } from "express";
import {obtenerCategorias} from "../services/categorias.services.js"
const router = Router();

router.get("/",async (req:Request,res:Response) => {
    try {
        const categorias = await obtenerCategorias();
        res.json(categorias);
    } catch (error) {
        
    }
})

export default router;