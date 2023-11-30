import { User } from "../models/user.model.js";
import { Task } from "../models/task.model.js";
import {
  createCategoryService,
  createUserService,
  deleteCategoryService,
  deleteUserService,
  getUserService,
  getUserTasksService,
  getUsersService,
  updateUserService,
} from "../services/user.service.js";
import e from "cors";

export const getUsers = async (_req, res) => {
  try {
    const users = await getUsersService();
    res.send(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserService(id);
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await createUserService(username, email, password);
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, categories } = req.body;
    const user = await updateUserService(
      id,
      username,
      email,
      password,
      categories
    );
    res.json({ user: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await getUserTasksService(id);
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCategory = async (req, res) => {
  try {
    const { userId, categoryName } = req.body;
    const data = await createCategoryService(userId, categoryName);

    res.json(data);
  } catch (error) {
    console.error("Error al crear la categoría para el usuario:", error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { userId, categoryName } = req.query;

    const data = await deleteCategoryService(userId, categoryName);

    res.json(data);
  } catch (error) {
    console.error("Error al eliminar la categoría del usuario:", error);
    res.status(500).json({ error: error.message });
  }
};
