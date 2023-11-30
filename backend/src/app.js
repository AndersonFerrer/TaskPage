import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(authRouter);
app.use(userRouter);
app.use(taskRouter);

export default app;
