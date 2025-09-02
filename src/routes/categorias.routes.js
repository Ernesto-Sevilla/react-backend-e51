import { Router } from "express";
import { obtenerCategorias } from "../controllers/categorias.controllers.js";

const router = Router();

//Rutas
router.get('/categorias', obtenerCategorias);
export default router;