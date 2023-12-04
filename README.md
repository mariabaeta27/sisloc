# Teste Sisloc

**Descrição:** O teste tem como objetivo validar os conhecimentos técnicos.

**Pessoa avaliada:** [Maria Baeta](https://github.com/mariabaeta27)

**Stacks:** Node, Mysql

**Dependências:**  Readline-sync, Dotenv, Mysql2

## Instruções

- Escreva o código o mais organizado possível;
- Se tiver alguma dúvida, faça sua consideração na questão como um comentário de
código;
- Serão considerados e pontuados também sintaxe correta, indentação, nomes de
variáveis, estrutura da arquitetura, códigos limpos, integridade e comentários,
quando necessário (poderá utilizar até imagens das respostas aos exercícios para
garantir a visibilidade correta do avaliador, quanto a todos os detalhes, no caso de low
codes). Não serão consideradas soluções puramente de banco de dados, a não ser que
seja pedido.
- Numere as respostas conforme as perguntas (lembre-se da organização)
- Não estamos interessados no programa final (no executável ou página), mas sim na
implementação das soluções, isto é, no código-fonte em si!!!
- Pode utilizar qualquer linguagem que preferir (até pseudocódigo), desde que se atente
às regras. Quanto mais próximo da nossa realidade (Outsystems, Javascript, Delphi),
melhor!

## Setup do projeto

- Baixe o repositório no [Github](https://github.com/mariabaeta27/sisloc)
- Acesse a pasta do projeto
- Instale as dependências

```bash
yarn install
```

- Crie um arquivo .env como as propriedades:

```bash
PORT
MYSQL_USER
MYSQL_PASSWORD
HOST
```

ou utilize os valores default definido no arquivo [connection.js](./connection.js)

## Exercícios

Para executar os exercícios acesse pasta [exercises](./exercises/)

```bash
cd exercisess
```

### 1. Lógica básico

- [x] Escreva uma função (reutilizável) que receba a quantidade de DVDs a ser vendida e retorne o valor desta venda como parâmetro (2 pontos).

  - Para executar: No terminal rode o comando: **node exercise_1.js**

### 2. Acrescentando banco de dados

- [x] [Questão A](./exercises/exercise_2_A.sql): Escreva comandos SQL para criar as tabelas acima com as respectivas chaves primárias, estrangeiras e índice único (1 ponto).

  - Para executar: No banco execute o [script SQL](./exercises/exercise_2_A.sql).

- [x] Questão B: Escreva uma função para inserir um registro na tabela produto, que recebe como parâmetro o nome do produto e o valor e retorna o código que deve ser gerado por esta função (1 ponto).

  - **Atenção!** Para testar a função separadamente descomente a linha 31 [aqui](./exercises/exercise_2_B.js).
  - Para executar: No terminal rode o comando: **node exercise_2_B.js**

- [x] Questão C: Escreva uma função para inserir um registro na tabela ProdutoDesconto, que recebe como parâmetro o código do produto, a quantidade inicial da faixa e o valor já com desconto (1 ponto).

  - **Atenção!** Para testar a função separadamente descomente a linha 56 [aqui](./exercises/exercise_2_C.js).
  - Para executar: No terminal rode o comando: **node exercise_2_C.js**

- [x] [Questão D](./exercises//exercise_2_D.js): Escreva uma função que utilize as funções criadas acima, para inserir os registros no banco de dados do problema do EXERCÍCIO 1 (1 ponto).

  - Para executar: No terminal rode o comando: **node exercise_2_D.js**

- [x] [Questão E](./exercises/exercise_2_E.js): Escreva uma função que receba como parâmetro o código do produto e a quantidade a ser vendida, e retorne o valor total da venda. Nesta questão deverá ser feito consultas às tabelas criadas no exercício anterior, de forma que implemente um algoritmo baseado na questão (A) porém com valores armazenados e não fixos. Atenção para o fato de que no exercício (A) só temos duas faixas de desconto e, neste exercício, as faixas de desconto estão armazenadas na tabela (4 pontos).

  - Para executar: No terminal rode o comando: **node exercise_2_E.js**
