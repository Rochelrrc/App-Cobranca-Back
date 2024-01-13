const knex = require('../../Connection/index');

const validarStatusCobranca = async (req, res, next) => {
    try {
        const associado_id = req.usuario.id;
        const cobrancas = await knex('cobrancas').select(
            'cobrancas.id',
            'cobrancas.valor',
            'cobrancas.descricao',
            'cobrancas.vencimento',
            'cobrancas.status',
            'cobrancas.cliente_id',
            'clientes.nome as nome_cliente'
        ).leftJoin('clientes', 'cobrancas.cliente_id', 'clientes.id')
            .leftJoin('usuarios', 'clientes.associado_id', 'usuarios.id')
            .where('usuarios.id', associado_id);
        for (let i = 0; i <= cobrancas.length - 1; i++) {
            console.log(cobrancas[i]);
            const dataVencimento = new Date(cobrancas[i].vencimento);
            const dataAtual = new Date();
            if (dataVencimento < dataAtual && cobrancas[i].status === 'pendente') {
                const atualizarCobranca = await knex('cobrancas').update({ status: 'vencida' }).where({ id: cobrancas[i].id });
            }
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = validarStatusCobranca;