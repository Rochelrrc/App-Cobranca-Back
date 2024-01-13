create table usuarios(
	id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null,
  cpf text,
	telefone text
);


create table clientes(
	id serial primary key,
  nome text not null,
  email text not null unique,
  cpf text not null unique,
  telefone text not null,
  cep text,
  logradouro text,
  complemento text,
  bairro text,
  cidade text,
  estado text,
  associado_id int references usuarios(id)
);

CREATE TABLE cobrancas (
    id serial PRIMARY KEY NOT NULL,
    valor int NOT NULL,
    descricao text NOT NULL,
    vencimento date NOT NULL,
    status text NOT NULL,
    cliente_id int REFERENCES clientes(id) NOT NULL,
);