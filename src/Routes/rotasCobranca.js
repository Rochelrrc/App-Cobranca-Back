const express = require('express')
const { cadastrarCobranca } = require('../Controllers/Cobrancas/cadatroCobranca.js');
const { verificarAutenticacao } = require('../Middleware/AutenticacaoUsuario/verificarAutenticacao.js');
const atualizarCobranca = require('../Controllers/Cobrancas/atualizarCobranca.js');
const filtrarCobrancas = require('../Controllers/Cobrancas/filtrarCobrancas');
const { validarCobranca, validarAtualizacaoCobranca } = require('../Middleware/Cobranca/validarCobranca.js');
const validarStatusCobranca = require('../Middleware/Cobranca/validarStatusCobranca')
const schemaCobranca = require('../schemas/schemaCobranca.js');
const validarDeletarConta = require('../Middleware/Cobranca/validarDeletarConta.js');
const deletarCobranca = require('../Controllers/Cobrancas/deletarCobranca.js');
const { listarCobrancas } = require('../Controllers/Cobrancas/listarCobrancas.js');
const { detalharCobranca } = require('../Controllers/Cobrancas/detalharCobrança.js');
const { listarStatusCobranca } = require('../Controllers/Cobrancas/listarStatusCobranca.js');

const rotasCobranca = express();

rotasCobranca.use(verificarAutenticacao)
rotasCobranca.get('/cobrancas', validarStatusCobranca, listarCobrancas);
rotasCobranca.post('/cadastrar/cobranca/:cliente_id', validarCobranca(schemaCobranca), cadastrarCobranca)
rotasCobranca.patch('/cobranca/atualizar/:id_cobranca', validarAtualizacaoCobranca(schemaCobranca), atualizarCobranca);
rotasCobranca.delete('/cobranca/deletar/:id_cobranca', validarDeletarConta, deletarCobranca);
rotasCobranca.get('/cobranca/:id', detalharCobranca);
rotasCobranca.get('/listarStatusCobrancas/:status/:limite', listarStatusCobranca)
rotasCobranca.get('/filtrar/cobranca', filtrarCobrancas);

module.exports = rotasCobranca;