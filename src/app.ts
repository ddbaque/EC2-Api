import express from "express";
import morgan from "morgan";

import apiRoutes from "@routes/index.routes";

const app = express();

app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.json({ message: "Hello" });
});

app.use("/api", apiRoutes);

export default app;
