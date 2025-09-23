import { Router } from "express";
import { obtenerUsuarios } from "../controllers/usuarios.controllers.js";
import { obtenerUsuarioPorId } from "../controllers/usuarios.controllers.js";
import { registrarUsuario } from "../controllers/usuarios.controllers.js";
import { eliminarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

//Rutas para obtener todos los usuarios
router.get('/usuarios', obtenerUsuarios);

//Rutas para obtener un usuario por su ID
router.get('/usuarios/:id_usuario', obtenerUsuarioPorId);

// Ruta para registrar un nuevo usuario
router.post('/registrarusuario', registrarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete("/eliminarusuario/:id_usuario", eliminarUsuario);

export default router;