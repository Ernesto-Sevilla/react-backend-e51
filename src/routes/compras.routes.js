import { Router } from "express";
import { obtenerCompraPorId } from "../controllers/compras.controllers.js";
import { obtenerCompras } from "../controllers/compras.controllers.js";

const router = Router();

//Rutas para obtener todas las compras
router.get('/compras', obtenerCompras);

// Obtener una compra por su ID
router.get('/compras/:id_compra', obtenerCompraPorId);


export default router;