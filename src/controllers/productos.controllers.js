import e from "express";
import { pool } from "../../db_connection.js";

// Obtener todas los productos
export const obtenerProductos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Productos");
        res.json(result);
    }catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al leer los datos.",
            error: error
        });
    }
}

// Obtener un producto por su ID
export const obtenerProductoPorId = async (req, res) => {
    try {
        const id_producto = req.params.id_producto;
        const [result] = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id_producto]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los productos.'
        });
    }
};

// Registrar un nuevo Producto
export const registrarProducto = async (req, res) => {
    try {
        const { nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen} = req.body;
        const [result] = await pool.query(
            'INSERT INTO Productos (nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen]
        );
        res.status(201).json({ id_producto: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el producto.',
            error: error
        });
    }
};