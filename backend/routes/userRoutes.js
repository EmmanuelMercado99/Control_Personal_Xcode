const express = require("express");
const router = express.Router();

const {addUser} = require("../controllers/users.controllers");

router.post("/AddUser", addUser);

module.exports = router;
