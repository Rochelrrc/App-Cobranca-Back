const knex = require('../../Connection/index');
const { format } = require('date-fns');

const cadastrarCobranca = async (req, res) => {
    const { valor, descricao, vencimento, status } = await req.body;
    const { cliente_id } = await req.params;
    try {
        const dataAtual = format(new Date(), 'yyyy/MM/dd');

        const criarCobranca = await knex('cobrancas').insert({
            valor,
            descricao: descricao,
            vencimento,
            status: status.toLowerCase() === 'cobrança pendente' ? 'pendente' : 'paga',
            cliente_id,
        });
        if (vencimento < dataAtual && status.toLowerCase() === 'cobrança pendente' || vencimento > dataAtual && status.toLowerCase() === 'cobrança pendente') {
            const atualizarClienteIndadimplente = await knex('clientes').update({ status: 'Inadimplente' }).where({ id: cliente_id });

        }
        if (status.toLowerCase() === 'cobrança paga') {
            const atualizarClienteEmDia = await knex('clientes').update({ status: 'Em dia' }).where({ id: cliente_id });
        }

        return res.status(201).json({ message: "Cobrança cadastrada com sucesso" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    cadastrarCobranca
}