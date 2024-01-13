const knex = require('../../Connection/index');

const filtrarCobrancas = async (req, res) => {
    const { idCobranca, nomeCliente, status } = req.query;
    const associado_id = req.usuario.id;
    try {
        if (idCobranca) {
            const cobrancas = await knex('cobrancas').select('cobrancas.*', 'clientes.nome as nome_cliente').leftJoin('clientes', 'cobrancas.cliente_id', 'clientes.id').
                leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id').where('cobrancas.id', idCobranca).andWhere('usuarios.id', associado_id).first();
            return res.status(200).json({ cobrancas });
        }
        if (nomeCliente) {
            const cobrancas = await knex('cobrancas').select('cobrancas.*', 'clientes.nome as nome_cliente').
                leftJoin('clientes', 'cobrancas.cliente_id', 'clientes.id').leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id')
                .where('clientes.nome', nomeCliente).andWhere('usuarios.id', associado_id);
            return res.status(200).json({ cobrancas });
        }
        if (status) {
            const cobrancas = await knex('cobrancas').select('cobrancas.*', 'clientes.nome as nome_cliente').leftJoin('clientes', 'cobrancas.cliente_id', 'clientes.id').
                leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id').where('cobrancas.status', status).andWhere('usuarios.id', associado_id);
            return res.status(200).json({ cobrancas });
        }


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = filtrarCobrancas