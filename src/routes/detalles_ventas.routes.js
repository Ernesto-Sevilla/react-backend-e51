import { Router } from "express";
import { obtenerDetallesVentas } from "../controllers/detalles_ventas.controllers.js";

const router = Router();

//Rutas para obtener todos los detalles de ventas
router.get('/detalles_ventas', obtenerDetallesVentas);
export default router;