import 'dotenv/config.js';
import express from 'express';
import indexRouter from './routers/indexRouter.js';
import cors from 'cors';
import connectDB from './config/database.js';

const server = express();

server.use(cors());
server.use(express.json());

connectDB();

server.use('/api', indexRouter);

server.listen(process.env['PORT'], () => {
  console.log(`Server running on http://localhost:${process.env['PORT']}`);
});
