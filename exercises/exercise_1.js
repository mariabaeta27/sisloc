const readline = require("readline-sync");

const priceBase = 1.1;
const firstRange = 10;
const firstPrice = 1;
const secondRange = 20;
const secondPrice = 0.9;

const calculateBasePrice = (amount) => {
	return amount * priceBase;
};

const calculateFirstPriceRange = (amount) => {
	return calculateBasePrice(firstRange) + (amount - firstRange) * firstPrice;
};

const calculateSecondPriceRange = (amount) => {
	return (
		calculateFirstPriceRange(secondRange) + (amount - secondRange) * secondPrice
	);
};

const calculateValue = (amount) => {
	let value = 0;
	if (amount <= 10) {
		value = value + calculateBasePrice(amount);
	} else if (amount > 10 && amount <= 20) {
		value = value + calculateFirstPriceRange(amount);
	} else if (amount > 20) {
		value = value + calculateSecondPriceRange(amount);
	}
	return `O valor da venda será: R$ ${value.toFixed(2)}`;
};

let amountQuestion = readline.question(
	"Qual a quantidade de DVDs para a vender?"
);

console.log(calculateValue(amountQuestion));
