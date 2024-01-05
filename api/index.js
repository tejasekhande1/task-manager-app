const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors())

const { dbConnect } = require("./config/database");
dbConnect();

const list = require("./routes/list");
app.use("/list", list);

const task = require("./routes/task");
app.use("/task", task);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
