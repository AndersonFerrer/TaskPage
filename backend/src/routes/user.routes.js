import { Router } from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  getUserTasks,
  createCategory,
  deleteCategory,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUser);
router.get("/users/:id/tasks", getUserTasks);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.delete("/deleteCategory", deleteCategory);
router.post("/createCategory", createCategory);

export default router;
