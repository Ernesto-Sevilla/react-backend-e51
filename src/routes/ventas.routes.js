import { Router } from "express";
import { obtenerVentas } from "../controllers/ventas.controllers.js";
import { obtenerVentaPorId } from "../controllers/ventas.controllers.js";
import { registrarVenta } from "../controllers/ventas.controllers.js";

const router = Router();

//Rutas para obtener todas las ventas
router.get('/ventas', obtenerVentas);

//Rutas para obtener una venta por su ID
router.get('/ventas/:id_venta', obtenerVentaPorId);

// Ruta para registrar una nueva venta
router.post('/registrarventa', registrarVenta);

export default router;