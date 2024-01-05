const { Task } = require("../models/Task");

exports.addTask = async (req, res) => {
  try {
    const { title, _listId } = req.body;

    const task = await Task.create({
        title,
        _listId
    })

    return res.status(200).json({
      status: true,
      data: task,
      message: "List deleted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in adding task",
      error: e.message,
    });
  }
};
