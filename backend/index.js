require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();


const {PORT} = process.env || 3001
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes")
const {database} = require("./database/db_config");

app.use(cors());
app.use(express.json());
app.use("/User", userRoutes);
app.use("/Task", taskRoutes);
database.sync({alter: true, force:false});
app.listen(PORT, () => {
	console.log("Servidor escuchando en el puerto 3001");
});

//docker run --name postgres-container -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres
