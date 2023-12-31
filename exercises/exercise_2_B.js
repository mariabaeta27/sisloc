// Questão B : Escreva uma função para inserir um registro na tabela produto, que recebe como parâmetro o nome do produto e o valor e retorna o código que deve ser gerado por esta função

const readline = require("readline-sync");
const connection = require("../connection");

const createProduct = async (nome, valor) => {
	try {
		const [product] = await connection.query(
			`INSERT INTO Produto (nome, valor) VALUES (?,?)`,
			[nome, valor]
		);

		return product.insertId;
	} catch (error) {
		console.error(`${error}`);
	}
};

// Função para testar a execução da createProduct

const start = async () => {
	let nome = readline.question("Qual o nome do produto? ");
	let valor = readline.question("Qual o valor do produto? ");
	const result = await createProduct(nome, valor);
	console.log("codigo: ", result);

	process.exit();
};

// Para testar a função separada basta remover o // da linha a baixo e rodar o comando node
// start();

module.exports = createProduct;
