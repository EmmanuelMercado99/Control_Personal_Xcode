const {DataTypes} = require("sequelize");

module.exports = (database) => {
	database.define("Task", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,

			primaryKey: true,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		orderBy: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		to: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});
};
