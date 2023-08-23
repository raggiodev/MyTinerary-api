import 'dotenv/config.js';
import express from "express";
import indexRouter from "./routers/indexRouter.js";
import cors from "cors";
import './config/database.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api', indexRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
