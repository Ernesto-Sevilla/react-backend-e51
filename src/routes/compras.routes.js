import { Router } from "express";
import { obtenerCompras } from "../controllers/compras.controllers.js";

const router = Router();

//Rutas para obtener todas las compras
router.get('/compras', obtenerCompras);
export default router;