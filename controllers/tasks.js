const getAllTasks = (request, response) => {
  response.status(200).json("get all tasks");
};

const createTask = (request, response) => {
  response.status(201).json("create a task");
};

const getTask = (request, response) => {
  const id = request.params.id;
  console.log(id, typeof id);
  response.status(200).json("get task");
};

const updateTask = (request, response) => {
  response.status(200).json("update a task");
};

const deleteTask = (request, response) => {
  response.status(204).json();
};


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};