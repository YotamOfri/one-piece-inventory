require("dotenv").config();
import { PrismaClient } from "@prisma/client";
import express, { Express } from "express";
import { categoriesRouter } from "./routes/categoriesRoutes";

const app: Express = express();
const port: Number = Number(process.env.PORT) || 3100;

export const prismaClient = new PrismaClient({ log: ["query"] });
app.use(express.json());

app.use("/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
