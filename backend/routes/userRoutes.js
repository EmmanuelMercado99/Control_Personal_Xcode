const express = require("express");
const router = express.Router();

const {addUser,getAllUSers,getUser,deleteUser} = require("../controllers/users.controllers");

router.post("/AddUser", addUser);
router.get("/GetUsers",getAllUSers)
router.get("/SearchUser",getUser)
router.delete("/DeleteUser",deleteUser)

module.exports = router;
