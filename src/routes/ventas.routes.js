import { Router } from "express";
import { obtenerVentas } from "../controllers/ventas.controllers.js";
import { obtenerVentaPorId } from "../controllers/ventas.controllers.js";
import { registrarVenta } from "../controllers/ventas.controllers.js";
import { eliminarVenta } from "../controllers/ventas.controllers.js";
import { actualizarVenta } from "../controllers/ventas.controllers.js";
import { actualizarVentaPatch } from "../controllers/ventas.controllers.js";

const router = Router();

//Rutas para obtener todas las ventas
router.get('/ventas', obtenerVentas);

//Rutas para obtener una venta por su ID
router.get('/ventas/:id_venta', obtenerVentaPorId);

// Ruta para registrar una nueva venta
router.post('/registrarventa', registrarVenta);

// Ruta para eliminar una venta por su ID
router.delete("/eliminarventa/:id_venta", eliminarVenta);

// Ruta para actualizar una venta por su ID
router.put("/actualizarventa/:id_venta", actualizarVenta);

// Ruta para actualizar una venta por su ID de forma parcial
router.patch("/actualizarventapatch/:id_venta", actualizarVentaPatch);

export default router;