import { Router } from "express";
import { obtenerDetallesCompras } from "../controllers/detalles_compras.controllers.js";
import { obtenerDetalleCompraPorId } from "../controllers/detalles_compras.controllers.js";
import { registrarDetalleCompra } from "../controllers/detalles_compras.controllers.js";
import { eliminarDetalleCompra } from "../controllers/detalles_compras.controllers.js";

const router = Router();

//Rutas para obtener todos los detalles de compras
router.get('/detalles_compras', obtenerDetallesCompras);

//Rutas para obtener un detalle de compra por su ID
router.get('/detalles_compras/:id_detalle_compra', obtenerDetalleCompraPorId);

// Ruta para registrar un nuevo detalle de compra
router.post('/registrardetallecompra', registrarDetalleCompra);

// Ruta para eliminar un detalle de compra por su ID
router.delete("/eliminardetallecompra/:id_detalle_compra", eliminarDetalleCompra);


export default router;