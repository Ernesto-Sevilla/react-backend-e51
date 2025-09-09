import { pool } from "../../db_connection.js";

// Obtener todas los detalles de compras
export const obtenerDetallesCompras = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM detalles_compras");
        res.json(result);
    }catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al leer los datos.",
            error: error
        });
    }
}

// Obtener un detalle compra por su ID
export const obtenerDetalleCompraPorId = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query('SELECT * FROM detalles_compras WHERE id_detalle_compra = ?', [id_detalle_compra]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los detalles de compras.'
        });
    }
};