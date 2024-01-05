const express = require("express");
const router = express.Router();

const {
  getLists,
  postList,
  updateList,
  deleteList,
  getTasks,
  postTask,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../controllers/listService");

router.get("/", getLists);
router.post("/", postList);
router.patch("/:id", updateList);
router.delete("/:id", deleteList);

router.get("/:id/task", getTasks);
router.post("/:id/task", postTask);

router.patch("/:id/task/:taskId", updateTask);
router.delete("/:id/task/:taskId", deleteTask);

router.get("/:id/task/:taskId", getSingleTask);
module.exports = router;
