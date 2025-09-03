import { Router } from "express";
import { obtenerClientes } from "../controllers/clientes.controllers.js";

const router = Router();

//Rutas para obtener todos los clientes
router.get('/clientes', obtenerClientes);
export default router;