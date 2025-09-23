import { Router } from "express";

import { obtenerEmpleados } from "../controllers/empleados.controllers.js";
import { obtenerEmpleadoPorId } from "../controllers/empleados.controllers.js";
import { registrarEmpleado } from "../controllers/empleados.controllers.js";
import { eliminarEmpleado } from "../controllers/empleados.controllers.js";

const router = Router();

//Rutas para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

//Rutas para obtener un empleado por su ID
router.get('/empleados/:id_empleado', obtenerEmpleadoPorId);

// Ruta para registrar un nuevo empleado
router.post('/registrarempleado', registrarEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete("/eliminarempleado/:id_empleado", eliminarEmpleado);

export default router;