// Importar las dependencias necesarias
import express from "express";
import cors from "cors";

// Importar las rutas
import rutasCategoria from "./src/routes/categoria.routes.js";

//Crear la aplicacion de Express
const app = express();

// Habilitar CORS para cualquier origen
app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
}));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

//Rutas
app.use("/api", rutasCategoria);

//Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        message: "La ruta que ha especificado no se encuentra registrada."
    });
});

//Export la aplicacion
export default app;