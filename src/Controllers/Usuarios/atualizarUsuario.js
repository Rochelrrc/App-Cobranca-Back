const knex = require('../../Connection/index');
const bcryp = require('bcrypt');


const atualizarUsuario = async (req, res) => {
    const { nome, email, cpf, novaSenha, senhaAtual, telefone } = await req.body;
    const { id } = await req.usuario;

    try {
        if (novaSenha) {
            const senhaCriptografada = await bcryp.hash(novaSenha, 10);
            const atualizarSenha = await knex('usuarios').where({ id }).update({ senha: senhaCriptografada }).where({ email });
        }
        const usuario = await knex('usuarios').where({ id }).update({
            nome,
            email,
            cpf,
            telefone
        });
        if (!usuario) {
            res.status(404).json({ message: 'Usuário não atualizado' });
        }

        return res.status(201).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { atualizarUsuario };
