const { Task } = require("../database/db_config");

exports.addTask = async (req, res) => {
  console.log("Agregando tarea");
  const { description, orderBy, to, status } = req.body;
  try {
    const response = await Task.create({ description, orderBy, to, status });
    res.status(200).json([response]);
  } catch (error) {
    res.status(500).json({ message: error });
  } finally {
    console.log("Producto agregado a la base de datos");
  }
};

exports.getAllTaskSup = async (req, res) => {
  console.log("Encontrando todas las tareas del supervisor");
  const { supervisor } = req.query;
  try {
    const response = await Task.findAll({
      where: {
        orderBy: supervisor,
      },
    });
    if (response.length > 0) res.status(200).json(response);
    else res.status(200).json({ message: "No existe", data: [] });
  } catch (error) {
    res.status(500).json({ message: error });
  } finally {
    console.log("Producto agregado a la base de datos");
  }
};

exports.getAllTaskUser = async (req, res) => {
  console.log("Encontrando todas las tareas del supervisor");
  const { user } = req.query;
  try {
    const response = await Task.findAll({
      where: {
        to: user,
      },
    });

    if (response.length > 0) res.status(200).json(response);
    else res.status(200).json({ message: "No existe", data: [] });
  } catch (error) {
    res.status(500).json({ message: error });
  } finally {
    console.log("Producto agregado a la base de datos");
  }
};

exports.modifyTask = async (req, res) => {
  console.log("Modificando la tarea");
  const { id } = req.query;
  try {
    const response = await Task.update({status:"Listas"},{
      where: {
        id,
      },
    });

    if (response.length > 0) res.status(200).json("Ok");
    else res.status(200).json({ message: "No existe", data: [] });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
