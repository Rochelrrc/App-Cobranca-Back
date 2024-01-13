# Rotas:

# 1° SPRINT: 

## Cadastro Usuario - POST:
- Nao exigir autenticaçao
- Dados persistem
- Senha criptografada para o BD

#### Obrigatorio:
- Nome, Email e Senha;

#### Validaçoes:
- Campos em Branco
- Checagem de email ja existente
- Retorno de mensagem de criaçao

### Validacao Opcional:
- Nome c/ mais de 3 letras
- Senha c/ min 8 caracteres
- Senha c/ caracter especial e numero
- email com @ e sem "." no inicio ou final

## Login - POST:

### Obrigatorio:
- Email;
- Senha;
- Devolver o token para acesso;

### Validações : 
- Campos em branco;
- Verificar se o e-mail existe;
- Verificar se a senha está correta;
- Receber o objeto do usário após o login - primeiro nome, img;


## Atualizar Usuário - PATCH:

### Obrigatório:
- Para acessar o cadastro necessario token;
- Receber os dados do usuário;
- Editar ao menos um dos dados do usuário;
- Caso seja informado uma nova senha, criptografar a senha no DB;
- Não permitir os campos obrigatórios estarem em branco;
- CPF e telefone opcionais;
- Retornar mensagem de sucesso;

### Validações: 
- CPF;
- Senha, email = cadastro usuário;
- Validar se cep existe;
- Telefone;
- Validar se o email novo já nao existe no BD;

## Cadastro Cliente - POST: 

### Obrigatório:
- Para acessar o cadastro necessario token;
- Campos obrigatorios: Nome User, email, CPF, telefone;
- Campos não obrigatórios: Endereço(cep, logradouro, bairro, complemento,UF, cidade); 

### Validacoes:
- Campos em Branco;
- email ja cadastrado;
- CPF ja cadastrado;
- Caso informado validar CEP;


# 2° SPRINT:

## Listagem de Clientes - GET:

### Obrigatorio:
- Token para acessar
- Retorna: lista geral com nome, email, telefone, CPF e Status do cliente

### Validacoes:
- Validar o token para o acesso.

## Detalhamento do Cliente - GET:

### Obrigatorio:
- Token para acessar
- Retorna: Dados do cliente:

      - nome
      - email 
      - telefone
      - CPF
      - endereco completo
      - Status do cliente.
- Retorna as cobrancas relacionadas a aquele cliente: 
 
      - Identificador da Cobrança
      - Descrição
      - Data
      - Valor
      - Status
      - Descrição

### Validacoes:
- Validacao Token


### Obrigatorio:
- Token
- Dados persistidos
- Campos Obrigatorios:

      - Nome 
      - E-mail 
      - CPF 
      - Telefone
- Demais Campos: 
      
      - CEP
      - Endereço
      - Complemento
      - Bairro
      - Cidade
      - Estado
- Mensagens de erro caso: 
      
      - Campo em branco
      - Novo email ja tiver um cadastro
      - Novo CPF ja tiver um cadastro (???)

## Cadastro de Cobranca - POST:

### Obrigatorio:
- Token
- Campos necessários para o cadastro:

      - Cliente (*)
      - Descrição (*)
      - Status (*)
      - Deverá existir duas opções: "pago" e "pendente"
      - Valor (*)
      - Vencimento (*)

- Mensagem de erro: Campo em branco

### Validacoes: 
- Campos em brancos

## Listagem de cobranças - GET: 

### Obrigatorio:
- Token
- Retornar as informacoes da cobranca

# 3° SPRINT:

## Edição de Cobrança - PATCH:

### Obrigatorio:

      - Descrição (*)
      - Status (*)
      - Valor (*)
      - Vencimento (*)

### Validaçoes:
- Campos Obrigatorios

## Exclusão de Cobrança - DELETE:

### Obrigatorio:

 - Cobrança deve estar pendente p/ ser excluida
 - Cobranças pagas nao podem ser excluidas
 - Retornar mensagem de sucesso

 ### Validaçoes:
      
      - Verificar se a conta está pendente
      - Verificar se está paga

## Detalhe de Cobrança - GET:

### Obrigatorio:

- Retorna informaçoes de uma cobrança

## Busca e Ordenaçao - GET:

### Obrigatorio:

- *Cobrança*: Filtrar pelo nome ou id da cobrança
- *Cliente*: Filtrar pelo nome, CPF, email
- Retornar mensagem caso não encontre nenhum resultado

## "Ver todos" - GET:

- Gerar rotas com aplicaçao de filtros para exibiçao



# Ferramentas de Uso:
- bcrypt;
- JWT(json web token);
- knex;
- PG;
- dotenv;
- joi;
- express;
- Nodemon;