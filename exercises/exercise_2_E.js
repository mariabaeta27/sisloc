const connection = require("../connection");
const readline = require("readline-sync");
// Questão E : Escreva uma função que receba como parâmetro o código do produto e a quantidade a ser vendida, e retorne o valor total da venda. Nesta questão deverá ser feito
// consultas às tabelas criadas no exercício anterior, de forma que implemente um algoritmo baseado na questão (A) porém com valores armazenados e não fixos. Atenção para o fato de
// que no exercício (A) só temos duas faixas de desconto e, neste exercício, as faixas de desconto estão armazenadas na tabela.

const calculatePrice = async (codigo, quantidade) => {
	try {
		const [[product]] = await connection.query(
			`SELECT * FROM Produto WHERE codigo = ?`,
			[codigo]
		);

		if (product) {
			const [discountProducts] = await connection.query(
				`SELECT * FROM ProdutoDesconto WHERE codigo = ? ORDER BY quantidade`,
				[product.codigo]
			);

			let price = 0;

			const firstIndex = 0;
			const lastIndex = discountProducts.length - 1;

			if (discountProducts.length !== 0) {
				discountProducts.forEach((discount, index) => {
					if (quantidade > discount.quantidade || index === firstIndex) {
						if (index === firstIndex) {
							price =
								product.valor *
								(quantidade < discount.quantidade
									? quantidade
									: discount.quantidade);
						}

						if (index !== lastIndex && quantidade > discount.quantidade) {
							const nextDiscount = discountProducts[index + 1];

							price +=
								discount.valor *
								(quantidade > nextDiscount.quantidade
									? nextDiscount.quantidade - discount.quantidade
									: quantidade - discount.quantidade);
						}

						if (index === lastIndex && quantidade > discount.quantidade) {
							price += discount.valor * (quantidade - discount.quantidade);
						}
					}
				});
			} else {
				price = product.valor * quantidade;
			}
			console.log(`O valor da venda será: R$ ${price.toFixed(2)}`);
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
