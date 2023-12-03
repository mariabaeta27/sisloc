const connection = require("../connection");
const readline = require("readline-sync");
// Questão E : Escreva uma função que receba como parâmetro o código do produto e a quantidade a ser vendida, e retorne o valor total da venda. Nesta questão deverá ser feito
// consultas às tabelas criadas no exercício anterior, de forma que implemente um algoritmo baseado na questão (A) porém com valores armazenados e não fixos. Atenção para o fato de
// que no exercício (A) só temos duas faixas de desconto e, neste exercício, as faixas de desconto estão armazenadas na tabela.

const calculatePrice = async (codigo, quantidade) => {
	try {
		const [produtos] = await connection.query(
			`SELECT * FROM Produto WHERE codigo = ?	`,
			[codigo]
		);
		const [produtosDesconto] = await connection.query(
			`SELECT * FROM ProdutoDesconto WHERE codigo = ?`,
			[codigo]
		);

		let value = 0;
		let amount = 0;
		if (produtos.length !== 0 && produtosDesconto.length !== 0) {
			console.log("Produtos", produtos, "produtosDesconto", produtosDesconto);

			produtosDesconto.forEach((discount) => {
				if (quantidade <= discount.quantidade) {
				}
			});
		} else {
			throw new Error("Produto não encontrado");
		}
	} catch (error) {
		console.error(`${error}`);
	}
	process.exit();
};

let codigo = readline.question("Qual o código do produto? ");
let quantidade = readline.question("Qual a quantidade? ");

calculatePrice(codigo, quantidade);
