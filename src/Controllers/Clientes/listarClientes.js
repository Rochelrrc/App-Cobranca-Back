const knex = require('../../Connection');

const listarClientes = async (req, res) => {

    try {
        const associado_id = req.usuario.id;

        const clientes = await knex('clientes').select('*').where('associado_id', associado_id)

        return res.status(200).json({ clientes });

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = { listarClientes }