import { Router } from "express";

import { obtenerEmpleados } from "../controllers/empleados.controllers.js";
import { obtenerEmpleadoPorId } from "../controllers/empleados.controllers.js";
import { registrarEmpleado } from "../controllers/empleados.controllers.js";
import { eliminarEmpleado } from "../controllers/empleados.controllers.js";
import { actualizarEmpleado } from "../controllers/empleados.controllers.js";
import { actualizarEmpleadoPatch } from "../controllers/empleados.controllers.js";

const router = Router();

//Rutas para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

//Rutas para obtener un empleado por su ID
router.get('/empleado/:id_empleado', obtenerEmpleadoPorId);

// Ruta para registrar un nuevo empleado
router.post('/registrarempleado', registrarEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete("/eliminarempleado/:id_empleado", eliminarEmpleado);

// Ruta para actualizar un empleado por su ID
router.put("/actualizarempleado/:id_empleado", actualizarEmpleado);

// Ruta para actualizar un empleado por su ID de forma parcial
router.patch("/actualizarempleadopatch/:id_empleado", actualizarEmpleadoPatch);

export default router;