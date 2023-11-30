import { Task } from "../models/task.model.js";
import { User } from "../models/user.model.js";

export const getUsersRepository = async () => {
  return await User.findAll();
};

export const getUserRepository = async (id) => {
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  if (!user)
    return res.status(404).json({
      message: "User not found",
    });
  return user;
};

export const deleteUserRepository = async (idUser) => {
  await User.destroy({
    where: { id: idUser },
  });
};

export const createUserRepository = async (username, email, password) => {
  const newUser = await User.create({
    username,
    email,
    password,
  });
  return newUser;
};

export const updateUserRepository = async (
  id,
  username,
  email,
  password,
  categories
) => {
  const user = await User.findByPk(id);
  if (username) user.username = username;
  if (email) user.email = email;
  if (password) user.password = password;
  if (categories) user.categories = categories;
  await user.save();

  return user;
};

export const getUserTasksRepository = async (id) => {
  return await Task.findAll({
    where: { userId: id },
  });
};

export const createCategoryRepository = async (userId, categoryName) => {
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  // Añade la nueva categoría al array de categorías del usuario
  if (!user.categories) {
    user.categories = [categoryName];
  } else {
    user.categories = [...user.categories, categoryName];
  }

  // Guarda los cambios en la base de datos
  await user.save();
  return user.categories;
};

export const deleteCategoryRepository = async (userId, categoryName) => {
  // Busca al usuario por su ID
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  // Filtra las categorías para excluir la que se quiere eliminar
  user.categories = user.categories.filter(
    (category) => category !== categoryName
  );

  // Guarda los cambios en la base de datos
  await user.save();

  return user.categories;
};
