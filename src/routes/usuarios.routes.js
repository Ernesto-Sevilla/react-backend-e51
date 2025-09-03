import { Router } from "express";
import { obtenerUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();

//Rutas para obtener todos los usuarios
router.get('/usuarios', obtenerUsuarios);
export default router;