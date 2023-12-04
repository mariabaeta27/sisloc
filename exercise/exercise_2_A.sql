-- Questão A: Escreva comandos SQL para criar as tabelas acima com as respectivas chaves primárias, estrangeiras e índice único

CREATE DATABASE IF NOT EXISTS sisloc;

CREATE TABLE IF NOT EXISTS sisloc.Produto(
codigo INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
valor FLOAT(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS sisloc.ProdutoDesconto(
codigo INT(10) NOT NULL,
quantidade INT(10) NOT NULL,
valor FLOAT(10) NOT NULL,
PRIMARY KEY (codigo, quantidade),
FOREIGN KEY (codigo) REFERENCES Produto(codigo)
)