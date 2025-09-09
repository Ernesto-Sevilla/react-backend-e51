import { Router } from "express";

import { obtenerEmpleados } from "../controllers/empleados.controllers.js";
import { obtenerEmpleadoPorId } from "../controllers/empleados.controllers.js";

const router = Router();

//Rutas para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

//Rutas para obtener un empleado por su ID
router.get('/empleados/:id_empleado', obtenerEmpleadoPorId);

export default router;