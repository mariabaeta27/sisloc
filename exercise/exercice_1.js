const readline = require("readline-sync");

const calculateValue = (amount) => {
	let value = 0;
	if (amount <= 10) {
		value = amount * 1.1;
	} else if (amount > 10 && amount < 20) {
		value = 10 * 1.1 + (amount - 10) * 1;
	} else if (amount > 20) {
		const rest = amount - 20;
		value = 10 * 1.1 + 10 * 1 + rest * 0.9;
	}
	return `O valor da venda será: R$ ${value.toFixed(2)}`;
};

let amountQuestion = readline.question(
	"Qual a quantidade de DVDs para a vender?"
);

console.log(calculateValue(amountQuestion));
