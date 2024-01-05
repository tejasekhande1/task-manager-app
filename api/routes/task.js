const express = require("express");
const router = express.Router();

const { addTask } = require("../controllers/taskService");

router.post("/", addTask);

module.exports = router;
