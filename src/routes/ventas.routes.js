import { Router } from "express";
import { obtenerVentas } from "../controllers/ventas.controllers.js";

const router = Router();

//Rutas para obtener todas las ventas
router.get('/ventas', obtenerVentas);
export default router;