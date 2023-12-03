// Questão D: Escreva uma função que utilize as funções criadas acima, para inserir os registros no banco de dados do problema do EXERCÍCIO 1

const createProduct = require("./exercise_2_B");
const createProductWhitDiscount = require("./exercise_2_C");

const registreData = async () => {
	try {
		const codProduto = await createProduct("Dvd", 1.1);
		await createProductWhitDiscount(codProduto, 20, 0.9);
		await createProductWhitDiscount(codProduto, 10, 1);
	} catch (error) {
		console.error(`${error}`);
	}

	// O método process.exit() é usado para finalizar o processo que está sendo executado ao mesmo tempo com um código de saída no NodeJS
	process.exit();
};

registreData();

module.exports = registreData;
