import { Router } from "express";
import { obtenerClientes } from "../controllers/clientes.controllers.js";
import { obtenerClientePorId } from "../controllers/clientes.controllers.js";
import { registrarCliente } from "../controllers/clientes.controllers.js";
import { eliminarCliente } from "../controllers/clientes.controllers.js";
import { actualizarCliente } from "../controllers/clientes.controllers.js";
import { actualizarClientePatch } from "../controllers/clientes.controllers.js";

const router = Router();

//Rutas para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por su ID
router.get('/cliente/:id_cliente', obtenerClientePorId);

// Ruta para registrar un nuevo cliente
router.post('/registrarcliente', registrarCliente);

// Ruta para eliminar un cliente por si ID
router.delete("/eliminarcliente/:id_cliente", eliminarCliente);

// Ruta para actualizar un cliente por su ID
router.put("/actualizarcliente/:id_cliente", actualizarCliente);

// Ruta para actualizar un cliente por su ID de forma parcial
router.patch("/actualizarclientepatch/:id_cliente", actualizarClientePatch);

export default router;