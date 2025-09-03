import { Router } from "express";
import { obtenerEmpleados } from "../controllers/empleados.controllers.js";

const router = Router();

//Rutas para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);
export default router;