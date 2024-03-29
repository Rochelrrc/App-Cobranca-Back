const joi = require('joi');

const schemaCadastro = joi.object({
    nome: joi.string().required().pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/).min(3).messages({
        'string.empty': 'O campo nome é obrigatório',
        'any.required': 'O campo nome é obrigatório',
        'string.min': 'Por favor insira um nome válido',
        'string.pattern.base': 'Por favor insira um nome válido'
    }),
    senha: joi.string().required().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#%])(?:([0-9a-zA-Z!$*&@#])){8,}$/).messages({
        'string.empty': 'O campo senha é obrigatório',
        'any.required': 'O campo senha é obrigatório',
        'string.pattern.base': 'A senha deve conter pelo menos um caracter especial, no minimo 8 caracteres, pelo menos um número e uma letra maiuscula',
    }),
    email: joi.string().email({ allowFullyQualified: true }).required().messages({
        'string.empty': 'O campo e-mail é obrigatório',
        'any.required': 'O campo e-mail é obrigatório',
        'string.email': 'Por favor insira um e-mail válido'
    }),
})

module.exports = schemaCadastro