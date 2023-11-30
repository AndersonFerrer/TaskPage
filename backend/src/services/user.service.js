import {
  createCategoryRepository,
  createUserRepository,
  deleteCategoryRepository,
  deleteUserRepository,
  getUserRepository,
  getUserTasksRepository,
  getUsersRepository,
  updateUserRepository,
} from "../repositories/user.repository.js";
export const getUsersService = async () => {
  const data = await getUsersRepository();
  return {
    message: "Users",
    data: data,
  };
};
export const getUserService = async (id) => {
  const data = await getUserRepository(id);
  return {
    message: "User Found",
    user: data,
  };
};

export const deleteUserService = async (id) => {
  const idUser = parseInt(id);
  await deleteUserRepository(idUser);
};

export const createUserService = async (username, email, password) => {
  return await createUserRepository(username, email, password);
};

export const updateUserService = async (
  id,
  username,
  email,
  password,
  categories
) => {
  const user = updateUserRepository(id, username, email, password, categories);
  return user;
};

export const getUserTasksService = async (id) => {
  return await getUserTasksRepository(id);
};

export const createCategoryService = async (userId, categoryName) => {
  const data = await createCategoryRepository(userId, categoryName);
  return data;
};

export const deleteCategoryService = async (userId, categoryName) => {
  const data = await deleteCategoryRepository(userId, categoryName);
  return data;
};
