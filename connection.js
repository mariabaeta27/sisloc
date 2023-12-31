const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
	host: process.env.HOST || "172.17.0.2", // Se necessário, substitua pelo seu host, `localhost` é o comum
	user: process.env.MYSQL_USER || "root", // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
	password: process.env.MYSQL_PASSWORD || "root", // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
	database: "sisloc",
	port: process.env.PORT || 3306,
});
module.exports = connection;
