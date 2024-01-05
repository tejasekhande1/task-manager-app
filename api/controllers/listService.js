const { List } = require("../models/List");
const { Task } = require("../models/Task");

exports.getLists = async (req, res) => {
  try {
    const lists = await List.find();
    return res.status(200).json({
      status: true,
      data: lists,
      message: "Lists fetched successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in fetching list",
      error: e.message,
    });
  }
};

exports.postList = async (req, res) => {
  try {
    const { title } = req.body;
    const newList = await List.create({ title });

    return res.status(200).json({
      status: true,
      data: newList,
      message: "List posted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in posting list",
      error: e.message,
    });
  }
};

exports.updateList = async (req, res) => {
  try {
    const { title } = req.body;
    const newList = await List.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { title: title } },
      { new: true }
    )
      .populate("title")
      .exec();
    return res.status(200).json({
      status: true,
      data: newList,
      message: "List posted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in updating list",
      error: e.message,
    });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const newList = await List.findByIdAndDelete({ _id: req.params.id }).exec();
    return res.status(200).json({
      status: true,
      data: newList,
      message: "List deleted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in updating list",
      error: e.message,
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    const tasks = await Task.find({ _listId: list._id });

    return res.status(200).json({
      status: true,
      data: tasks,
      message: "Tasks fetched successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in fetching task",
      error: e.message,
    });
  }
};

exports.postTask = async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      _listId: req.params.id,
    });

    const newTaskDoc = await newTask.save();

    return res.status(200).json({
      status: true,
      data: newTaskDoc,
      message: "Task added successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in adding task",
      error: e.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      {
        _id: req.params.taskId,
        _listId: req.params.id,
      },
      {
        $set: { title: req.body.title },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: true,
      data: updatedTask,
      message: "Task updated successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in updating task",
      error: e.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({
      _id: req.params.taskId,
      _listId: req.params.id,
    });

    if (!deletedTask) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: deletedTask,
      message: "Task deleted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in deleting task",
      error: e.message,
    });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.taskId,
      _listId: req.params.id,
    });

    if (!task) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: task,
      message: "Task fetched successfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: "Error in fetching task",
      error: e.message,
    });
  }
};
