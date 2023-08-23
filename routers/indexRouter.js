import {Router} from "express";
import citiesRouter from "./citiesRouter.js";

const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
  res.send('Welcome to my API of "MyTinerary"! (Don´t get too comfy)');
});

indexRouter.use('/cities', citiesRouter);

export default indexRouter;