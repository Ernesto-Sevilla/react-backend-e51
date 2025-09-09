import { Router } from "express";
import { obtenerClientes } from "../controllers/clientes.controllers.js";
import { obtenerClientePorId } from "../controllers/clientes.controllers.js";
import { registrarCliente } from "../controllers/clientes.controllers.js";

const router = Router();

//Rutas para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por su ID
router.get('/clientes/:id_cliente', obtenerClientePorId);

// Ruta para registrar un nuevo cliente
router.post('/registrarcliente', registrarCliente);

export default router;