import {
  createTaskRepository,
  deleteTaskRepository,
  getTaskRepository,
  getTasksRepository,
  updateTaskRepository,
} from "../repositories/task.repository.js";

export const getTasksService = async () => {
  return await getTasksRepository();
};

export const getTaskService = async (id) => {
  return await getTaskRepository(id);
};

export const deleteTaskService = async (id) => {
  await deleteTaskRepository(id);
};

export const createTaskService = async (
  title,
  description,
  categories,
  userId
) => {
  return await createTaskRepository(title, description, categories, userId);
};

export const updateTaskService = async (id, data) => {
  return await updateTaskRepository(id, data);
};
