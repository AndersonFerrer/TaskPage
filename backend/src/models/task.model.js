import { sequelize } from "../utils/database.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define(
  "Task",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isArchive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  { timestamps: false }
);
