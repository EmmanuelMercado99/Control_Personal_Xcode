const express = require("express");
const router = express.Router();

const {addTask,getAllTaskSup,getAllTaskUser,modifyTask} = require("../controllers/task.controllers");

router.post("/AddTask", addTask);
router.get("/getAllTaskSup",getAllTaskSup )
router.get("/getAllTaskUser",getAllTaskUser )
router.put("/updateTask",modifyTask)
// router.get("/GetUsers",getAllUSers)
// router.get("/SearchUser",getUser)

module.exports = router;