import { Router } from "express";
import { obtenerCompraPorId } from "../controllers/compras.controllers.js";
import { obtenerCompras } from "../controllers/compras.controllers.js";
import { registrarCompra } from "../controllers/compras.controllers.js";
import { eliminarCompra } from "../controllers/compras.controllers.js";
import { actualizarCompra } from "../controllers/compras.controllers.js";
import { actualizarCompraPatch } from "../controllers/compras.controllers.js";

const router = Router();

//Rutas para obtener todas las compras
router.get('/compras', obtenerCompras);

// Obtener una compra por su ID
router.get('/compras/:id_compra', obtenerCompraPorId);

// Registrar una nueva compra
router.post('/registrarcompra', registrarCompra);

// Eliminar una compra por su ID
router.delete("/eliminarcompra/:id_compra", eliminarCompra);

// Ruta para actualizar una compra por su ID
router.put("/actualizarcompra/:id_compra", actualizarCompra);

// Ruta para actualizar una compra por su ID de forma parcial
router.patch("/actualizarcomprapatch/:id_compra", actualizarCompraPatch);

export default router;