import app from "./app.js";
import { sequelize } from "./utils/database.js";
import "./models/user.model.js";
import "./models/task.model.js";
async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
    app.listen(3000);
    console.log("Server is running", 3000);
  } catch (error) {
    console.error("Not connected to database:", error);
  }
}

main();
