import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.send("Bienvenida a la API de Anderson Ferrer")
);

export default indexRouter;
