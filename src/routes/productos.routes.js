import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controllers.js";
import { obtenerProductoPorId } from "../controllers/productos.controllers.js";
import { registrarProducto } from "../controllers/productos.controllers.js";
import { eliminarProducto } from "../controllers/productos.controllers.js";

const router = Router();

//Rutas para obtener todos los productos
router.get('/productos', obtenerProductos);

//Rutas para obtener un producto por su ID
router.get('/productos/:id_producto', obtenerProductoPorId);

// Ruta para registrar un nuevo producto
router.post('/registrarproducto', registrarProducto);

// Ruta para eliminar un producto por su ID
router.delete("/eliminarproducto/:id_producto", eliminarProducto);

export default router;