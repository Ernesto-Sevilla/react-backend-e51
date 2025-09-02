import { pool } from "../../db_connection.js";

// Obtener todas las categorias
export const obtenerCategorias = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Categorias");
        res.json(result);
    }catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al leer los datos.",
            error: error
        });
    }
}