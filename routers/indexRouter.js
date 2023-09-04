import {Router} from "express";
import citiesRouter from "./citiesRouter.js"; // Necesario la extensión ".js"

const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
  res.send('Desde indexRouter.js para mi API: Welcome to my API of "MyTinerary"! (Don´t get too comfy)');
});

indexRouter.use('/cities', citiesRouter);
indexRouter.use('/itineraries', itinerariesRouter);

export default indexRouter;