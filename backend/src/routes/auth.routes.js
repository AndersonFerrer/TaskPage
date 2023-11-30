// authRoutes.js
import { Router } from "express";
const router = Router();
import { registerUser, loginUser } from "../controllers/auth.controller.js";

// Registro de usuario
router.post("/register", registerUser);

// Inicio de sesión
router.post("/login", loginUser);

export default router;
