require("dotenv").config();

const {Sequelize} = require("sequelize");
const {POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, PORT_DB, HOST_DB} =
	process.env;

const UserFunction = require("./models/User");

const database = new Sequelize(
	`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST_DB}:${PORT_DB}/${POSTGRES_DB}`,
	{logging: console.log()}
);

UserFunction(database);

database
	.authenticate()
	.then(() => {
		console.log("Conexión a la base de datos establecida correctamente.");
	})
	.catch((err) => {
		console.error("No se pudo conectar a la base de datos:", err);
	});

module.exports = {
	database,
	...database.models,
};
