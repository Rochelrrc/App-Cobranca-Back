const knex = require('../../Connection');

const cadastrarCliente = async (req, res) => {
    const {
        nome,
        email,
        cpf,
        telefone,
        cep,
        logradouro,
        bairro,
        complemento,
        uf,
        cidade
    } = req.body;

    try {
        await knex('clientes').insert({
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            cep: cep,
            logradouro: logradouro,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            associado_id: req.usuario.id,
        })

        return res.status(201).json({ message: 'Cliente cadastrado com sucesso' })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}


module.exports = { cadastrarCliente }