const readline = require("readline-sync");

const calculateBasePrice = (amount) => {
	return amount * 1.1;
};

const calculateDiscountPriceRange10 = (amount) => {
	return calculateBasePrice(10) + (amount - 10) * 1;
};

const calculateDiscountPriceRange20 = (amount) => {
	return calculateDiscountPriceRange10(20) + (amount - 20) * 0.9;
};

const calculateValue = (amount) => {
	let value = 0;
	if (amount <= 10) {
		value = value + calculateBasePrice(amount);
	} else if (amount > 10 && amount < 20) {
		value = value + calculateDiscountPriceRange10(amount);
	} else if (amount >= 20) {
		value = value + calculateDiscountPriceRange20(amount);
	}
	return `O valor da venda será: R$ ${value.toFixed(2)}`;
};

let amountQuestion = readline.question(
	"Qual a quantidade de DVDs para a vender?"
);

console.log(calculateValue(amountQuestion));
