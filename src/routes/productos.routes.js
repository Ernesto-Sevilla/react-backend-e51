import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controllers.js";

const router = Router();

//Rutas para obtener todos los productos
router.get('/productos', obtenerProductos);
export default router;