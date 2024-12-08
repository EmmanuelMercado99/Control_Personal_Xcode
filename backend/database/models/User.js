const {DataTypes} = require("sequelize");

module.exports = (database) => {
	database.define("User", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,

			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rol: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		supervisor:{
			type: DataTypes.STRING,
			allowNull: true ,
		}
	});
};
