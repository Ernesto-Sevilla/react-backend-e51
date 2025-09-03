import { pool } from "../../db_connection.js";

// Obtener todas los empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Empleados");
        res.json(result);
    }catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al leer los datos.",
            error: error
        });
    }
}