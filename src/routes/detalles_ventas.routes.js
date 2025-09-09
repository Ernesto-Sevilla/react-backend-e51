import { Router } from "express";
import { obtenerDetallesVentas } from "../controllers/detalles_ventas.controllers.js";
import { obtenerDetalleVentaPorId } from "../controllers/detalles_ventas.controllers.js";
import { registrarDetalleVenta } from "../controllers/detalles_ventas.controllers.js";

const router = Router();

//Rutas para obtener todos los detalles de ventas
router.get('/detalles_ventas', obtenerDetallesVentas);

//Rutas para obtener un detalle de venta por su ID
router.get('/detalles_ventas/:id_detalle_venta', obtenerDetalleVentaPorId);

// Ruta para registrar un nuevo detalle de venta
router.post('/registrardetalleventa', registrarDetalleVenta);

export default router;