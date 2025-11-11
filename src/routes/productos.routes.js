import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controllers.js";
import { obtenerProductoPorId } from "../controllers/productos.controllers.js";
import { registrarProducto } from "../controllers/productos.controllers.js";
import { eliminarProducto } from "../controllers/productos.controllers.js";
import { actualizarProducto } from "../controllers/productos.controllers.js";
import { actualizarProductoPatch } from "../controllers/productos.controllers.js";

const router = Router();

//Rutas para obtener todos los productos
router.get('/productos', obtenerProductos);

//Rutas para obtener un producto por su ID
router.get('/producto/:id_producto', obtenerProductoPorId);

// Ruta para registrar un nuevo producto
router.post('/registrarproducto', registrarProducto);

// Ruta para eliminar un producto por su ID
router.delete("/eliminarproducto/:id_producto", eliminarProducto);

// Ruta para actualizar un producto por su ID
router.put("/actualizarproducto/:id_producto", actualizarProducto);

// Ruta para actualizar un producto por su ID de forma parcial
router.patch("/actualizarproductopatch/:id_producto", actualizarProductoPatch);

export default router;