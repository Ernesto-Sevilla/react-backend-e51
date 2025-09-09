import { Router } from "express";
import { obtenerCategorias } from "../controllers/categorias.controllers.js";
import { obtenerCategoriaPorId } from "../controllers/categorias.controllers.js";
import { registrarCategoria } from "../controllers/categorias.controllers.js";

const router = Router();

//Rutas para obtener todas las categorias
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoría por su ID
router.get('/categorias/:id_categoria', obtenerCategoriaPorId);

// Ruta para registrar una nueva categoría
router.post('/registrarcategoria', registrarCategoria);

export default router;