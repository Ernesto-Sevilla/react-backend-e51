import { Router } from "express";
import { obtenerDetallesCompras } from "../controllers/detalles_compras.controllers.js";
import { obtenerDetalleCompraPorId } from "../controllers/detalles_compras.controllers.js";

const router = Router();

//Rutas para obtener todos los detalles de compras
router.get('/detalles_compras', obtenerDetallesCompras);

//Rutas para obtener un detalle de compra por su ID
router.get('/detalles_compras/:id_detalle_compra', obtenerDetalleCompraPorId);
export default router;