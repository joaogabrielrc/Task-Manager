const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const CustomAPIError = require("../errors/custom-error");


const getAllTasks = asyncWrapper(async (_request, response) => {
  const tasks = await Task.find({});
  response.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (request, response) => {
  const task = await Task.create(request.body);
  response.status(201).json({ task });
});

const getTask = asyncWrapper(async (request, response, next) => {
  const { id: taskID } = request.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) return next(
    new CustomAPIError("Task Not Found.", 404)
  );

  response.status(200).json({ task });
});

const updateTask = asyncWrapper(async (request, response, next) => {
  const { id: taskID } = request.params;
  const task = await Task.findOneAndUpdate(
    { _id: taskID },
    request.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!task) return next(
    new CustomAPIError("Task Not Found.", 404)
  );

  response.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (request, response, next) => {
  const { id: taskID } = request.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) return next(
    new CustomAPIError("Task Not Found.", 404)
  );

  response.status(204).json();
});


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};