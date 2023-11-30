import {
  createTaskService,
  deleteTaskService,
  getTaskService,
  getTasksService,
  updateTaskService,
} from "../services/task.service.js";

export const getTasks = async (_req, res) => {
  try {
    const tasks = await getTasksService();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskService(id);
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTaskService(id);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, categories, userId } = req.body;
    const newTask = await createTaskService(
      title,
      description,
      categories,
      userId
    );
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await updateTaskService(id, req.body);
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
