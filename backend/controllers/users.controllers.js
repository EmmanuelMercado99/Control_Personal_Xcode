const {User} = require("../database/db_config");

exports.addUser = async (req, res) => {
	console.log("Agregando usuarios");
	const {name, user, rol, password} = req.body;
	try {
		const response = await User.create({name, user, rol, password});
		res.status(200).json({message: "Ok", data: response});
	} catch (error) {
		console.log(error);
		res.status(500).json({message: error});
	} finally {
		console.log("Producto agregado a la base de datos");
	}
};
