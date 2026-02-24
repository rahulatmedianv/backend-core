import express from "express";
import type { Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/error.middlewares.ts";

const app = express();
app.use(express.json());
app.get("/api/health", (req: Request, res: Response) => {
  res.send("Ok");
});
app.use(globalErrorHandler);


export default app;
