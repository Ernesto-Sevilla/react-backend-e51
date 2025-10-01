import { Router } from "express";
import { obtenerCategorias } from "../controllers/categorias.controllers.js";
import { obtenerCategoriaPorId } from "../controllers/categorias.controllers.js";
import { registrarCategoria } from "../controllers/categorias.controllers.js";
import { eliminarCategoria } from "../controllers/categorias.controllers.js";
import { actualizarCategoria } from "../controllers/categorias.controllers.js";
import { actualizarCategoriaPatch } from "../controllers/categorias.controllers.js";

const router = Router();


//Rutas para obtener todas las categorias
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoría por su ID
router.get('/categorias/:id_categoria', obtenerCategoriaPorId);

// Ruta para registrar una nueva categoría
router.post('/registrarcategoria', registrarCategoria);

// Ruta para eliminar una categoría por si ID
router.delete("/eliminarcategoria/:id_categoria", eliminarCategoria);

// Ruta para actualizar una categoría por su ID
router.put("/actualizarcategoria/:id_categoria", actualizarCategoria);

// Ruta para actualizar una categoría por su ID de forma parcial
router.patch("/actualizarcategoriapatch/:id_categoria", actualizarCategoriaPatch);

export default router;