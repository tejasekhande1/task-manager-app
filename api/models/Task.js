const mongoose = require("mongoose");
const { List } = require("./List");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 1,
  },
  _listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: List,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = { Task };
