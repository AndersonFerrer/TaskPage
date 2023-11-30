import { User } from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El nombre de usuario ya está en uso" });
    }

    // Crea el nuevo usuario
    const newUser = await User.create({
      username,
      email,
      password, // Almacena la contraseña en texto plano (no recomendado en producción)
    });

    res.json({ message: "Usuario registrado con éxito", user: newUser });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busca al usuario por su nombre de usuario
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    res.json({ message: "Inicio de sesión exitoso", user: user });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: error.message });
  }
};
