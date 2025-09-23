import { pool } from "../../db_connection.js";

// Obtener todas los clientes
export const obtenerClientes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Clientes");
        res.json(result);
    }catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al leer los datos.",
            error: error
        });
    }
}

// Obtener un cliente por su ID
export const obtenerClientePorId = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;
        const [result] = await pool.query('SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${req.params.id} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los clientes.'
        });
    }
};

// Registrar un nuevo Cliente
export const registrarCliente = async (req, res) => {
    try {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,  celular, direccion, cedula} = req.body;
        const [result] = await pool.query(
            'INSERT INTO Clientes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula]
        );
        res.status(201).json({ id_cliente: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el cliente.',
            error: error
        });
    }
};

// Eliminar un cliente por su ID
export const eliminarCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;
        const [result] = await pool.query('DELETE FROM Clientes WHERE id_cliente = ?', [id_cliente]);
        if (result.affected === 0) {
            return res.status(404).json({
                mensaje: "Error al eliminar el cliente. El ID " + id_cliente + " no fue encontrado."
            });
        }
        // Respuesta sin contenido para indicar éxito
        res.sendStatus(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el cliente.',
            error: error
        });
    }   
};