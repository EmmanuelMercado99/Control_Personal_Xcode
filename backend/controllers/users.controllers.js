const { User } = require("../database/db_config");

exports.addUser = async (req, res) => {
  console.log("Agregando usuarios");
  const { name, user, rol, password, email, supervisor } = req.body;
  console.log(req.body);
  try {
    const response = await User.create({ name, user, rol, password, email, supervisor });
    res.status(200).json([response]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  } finally {
    console.log("Producto agregado a la base de datos");
  }
};

exports.getAllUSers = async (req, res) => {
	console.log("Todos los usuarios");
	try {
	  const response = await User.findAll();
	  res.status(200).json(response);
	} catch (error) {
	  console.log(error);
	  res.status(500).json({ message: error });
	} finally {
	  console.log("Producto agregado a la base de datos");
	}
  };

  exports.getUser = async (req, res) => {
	console.log("Usuario en especifico");
	const {user} = req.query
	console.log(user);
	try {
	  const response = await User.findAll({
		where:{
			user
		}
	  });
	  console.log(response);
	  if (response.length > 0 )res.status(200).json( response );
	  else res.status(200).json({ message: "No existe", data: [] });
	  
	} catch (error) {
	  console.log(error);
	  res.status(500).json({ message: error });
	} 
  };

  exports.deleteUser = async (req, res) => {
	console.log("Usuario en especifico");
	const {id} = req.query
	console.log(id);
	try {
	  const response = await User.destroy({
		where:{
			id
		}
	  });
	  console.log(response);
	  if (response.length > 0 )res.status(200).json([]);
	  else res.status(200).json(response);
	  
	} catch (error) {
	  console.log(error);
	  res.status(500).json({ message: error });
	} 
  };


  
