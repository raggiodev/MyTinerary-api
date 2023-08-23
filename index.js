import 'dotenv/config.js';
import express from 'express';
import indexRouter from './routers/indexRouter.js';
import cors from 'cors';
import './config/database.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api', indexRouter);
server.get('/', (req, res, next) => {
  res.send('Welcome to my API of "MyTinerary"! (Don´t get too comfy)')
})

server.listen(process.env['PORT'], () => {
  console.log('Server is running on: http://localhost:' + process.env['PORT']);
});
