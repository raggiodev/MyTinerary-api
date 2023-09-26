import "dotenv/config.js";
import express from "express";
import indexRouter from "./routers/indexRouter.js";
import cors from "cors";
import "./config/database.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

// const corsOptions = {
//   origin: 'http://localhost:5173/'
// }

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", indexRouter);

server.get("/", (req, res, next) => {
  res.send('Welcome to my API of "MyTinerary"! (Don´t get too comfy)');
});

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(process.env["PORT"], () => {
  console.log("Server is running on: http://localhost:" + process.env["PORT"]);
  console.log("Server is running on: https://api-mytinerary-joetheorium.vercel.app/");
});
