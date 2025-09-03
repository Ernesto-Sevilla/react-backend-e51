import { Router } from "express";
import { obtenerDetallesCompras } from "../controllers/detalles_compras.controllers.js";

const router = Router();

//Rutas para obtener todos los detalles de compras
router.get('/detalles_compras', obtenerDetallesCompras);
export default router;