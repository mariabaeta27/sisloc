const readline = require("readline-sync");
const connection = require("../connection");

// Questão C: Escreva uma função para inserir um registro na tabela ProdutoDesconto, que recebe como parâmetro o código do produto, a quantidade inicial da faixa e o valor já com  desconto.

const createProductWhitDiscount = async (codigo, quantidade, valor) => {
	try {
		const [produto] = await connection.query(
			`INSERT INTO ProdutoDesconto (codigo, quantidade, valor) VALUES (?, ?, ?)`,
			[codigo, quantidade, valor]
		);
		console.log(produto);
		return produto;
	} catch (error) {
		console.error(`${error}`);
	}
};

// Função para consultar produtos pelo codigo

const getProductByCod = async (codigo) => {
	try {
		const [produto] = await connection.query(
			`SELECT * FROM Produto WHERE codigo = ?`,
			[codigo]
		);

		return produto.length !== 0 ? produto : null;
	} catch (error) {
		console.error(`messageError: ${err}`);
	}
};

const start = async () => {
	try {
		let codigo = readline.question("Qual o código do produto? ");
		let quantidade = readline.question("Qual a quantidade? ");
		let valor = readline.question("Qual o valor já com desconto? ");
		const produto = await getProductByCod(codigo);

		if (produto) {
			await createProductWhitDiscount(codigo, quantidade, valor);
		} else {
			throw new Error("Produto não cadastrado");
		}
	} catch (error) {
		console.error(`${error}`);
	}
};

start();
