import { Router } from "express";
import { obtenerDetallesVentas } from "../controllers/detalles_ventas.controllers.js";
import { obtenerDetalleVentaPorId } from "../controllers/detalles_ventas.controllers.js";
import { registrarDetalleVenta } from "../controllers/detalles_ventas.controllers.js";
import { eliminarDetalleVenta } from "../controllers/detalles_ventas.controllers.js";
import { actualizarDetalleVenta } from "../controllers/detalles_ventas.controllers.js";
import { actualizarDetalleVentaPatch } from "../controllers/detalles_ventas.controllers.js";

const router = Router();

//Rutas para obtener todos los detalles de ventas
router.get('/detallesventas', obtenerDetallesVentas);

//Rutas para obtener un detalle de venta por su ID
router.get('/detallesventas/:id_detalle_venta', obtenerDetalleVentaPorId);

// Ruta para registrar un nuevo detalle de venta
router.post('/registrardetalleventa', registrarDetalleVenta);

// Ruta para eliminar un detalle de venta por su ID
router.delete("/eliminardetalleventa/:id_detalle_venta", eliminarDetalleVenta);

// Ruta para actualizar un detalle de venta por su ID
router.put("/actualizardetalleventa/:id_detalle_venta", actualizarDetalleVenta);

// Ruta para actualizar un detalle de venta por su ID de forma parcial
router.patch("/actualizardetalleventapatch/:id_detalle_venta", actualizarDetalleVentaPatch);

export default router;