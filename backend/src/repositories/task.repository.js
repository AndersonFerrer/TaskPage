import { Task } from "../models/task.model.js";

export const getTasksRepository = async () => {
  return await Task.findAll();
};
export const getTaskRepository = async (id) => {
  return await Task.findByPk(id);
};
export const deleteTaskRepository = async (id) => {
  await Task.destroy({
    where: { id: id },
  });
};
export const createTaskRepository = async (
  title,
  description,
  categories,
  userId
) => {
  return await Task.create({
    title: title,
    description: description,
    categories: categories,
    userId: userId,
  });
};

export const updateTaskRepository = async (id, data) => {
  const task = await Task.findOne({
    where: { id: id },
  });
  task.set(data);
  await task.save();
  return task;
};
