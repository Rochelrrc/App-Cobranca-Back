const knex = require('../../Connection/index');

const filtrarClientes = async (req, res) => {
    const { nomeCliente, email, cpf } = req.query;
    const associado_id = req.usuario.id;
    try {
        if (nomeCliente) {
            const clientes = await knex('clientes').select('clientes.*').leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id').where('clientes.nome', nomeCliente).
                andWhere('usuarios.id', associado_id);

            return res.status(200).json({ clientes });
        }
        if (email) {
            const clientes = await knex('clientes').select('clientes.*').leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id').where('clientes.email', email).
                andWhere('usuarios.id', associado_id);

            return res.status(200).json({ clientes });
        }

        if (cpf) {
            const clientes = await knex('clientes').select('clientes.*').leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id').where('clientes.cpf', cpf).
                andWhere('usuarios.id', associado_id);

            return res.status(200).json({ clientes });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = filtrarClientes;