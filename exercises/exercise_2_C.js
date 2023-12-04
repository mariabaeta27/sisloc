const readline = require("readline-sync");
const connection = require("../connection");

// Questão C: Escreva uma função para inserir um registro na tabela ProdutoDesconto, que recebe como parâmetro o código do produto, a quantidade inicial da faixa e o valor já com  desconto.

// Função para consultar produtos pelo codigo

const getProductByCod = async (codigo) => {
	try {
		const [product] = await connection.query(
			`SELECT * FROM Produto WHERE codigo = ?`,
			[codigo]
		);

		return product.length !== 0 ? product : null;
	} catch (error) {
		console.error(`${error}`);
	}
};

const createProductWhitDiscount = async (codigo, quantidade, valor) => {
	try {
		const codProduct = await getProductByCod(codigo);

		if (codProduct) {
			const [discountProduct] = await connection.query(
				`INSERT INTO ProdutoDesconto (codigo, quantidade, valor) VALUES (?, ?, ?)`,
				[codigo, quantidade, valor]
			);
			return discountProduct;
		} else {
			throw new Error("Produto não cadastrado");
		}
	} catch (error) {
		console.error(`${error}`);
	}
};

// Função para testar a execução de createProductWhitDiscount

const start = async () => {
	try {
		let codigo = readline.question("Qual o código do produto? ");
		let quantidade = readline.question("Qual a quantidade? ");
		let valor = readline.question("Qual o valor já com desconto? ");

		await createProductWhitDiscount(codigo, quantidade, valor);
	} catch (error) {
		console.error(`${error}`);
	}
	process.exit();
};

// Para testar a função  separada basta remover o // da linha a baixo e rodar o comando node

// start();

module.exports = createProductWhitDiscount;
