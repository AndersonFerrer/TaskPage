import { sequelize } from "../utils/database.js";
import { DataTypes } from "sequelize";
import { Task } from "./task.model.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  { timestamps: false }
);

// Relación entre User y Task
User.hasMany(Task, {
  foreignKey: "userId",
  sourceKey: "id",
});

Task.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});
