const knex = require('../../Connection/index')

const deletarCobranca = async (req, res) => {
    const { id_cobranca } = req.params;
    try {
        const deletarCobranca = await knex('cobrancas').where({ id: id_cobranca }).del();
        return res.status(200).json({ message: 'Cobrança deletada com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = deletarCobranca;