import {Router} from "express";
import citiesRouter from "./citiesRouter.js";
import itinerariesRouter from "./itinerariesRouter.js";
import activitiesRouter from "./activitiesRouter.js";
import authRouter from "./authRouter.js";

const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  response.send('Welcome to the API of MyTinerary, try the routes http://localhost:'+process.env['PORT']+'/api/cities or http://localhost:'+process.env['PORT']+'/api/itineraries or http://localhost:'+process.env['PORT']+'/api/auth for users');
});

indexRouter.use("/cities", citiesRouter);
indexRouter.use("/itineraries", itinerariesRouter);
indexRouter.use('/activities', activitiesRouter)
indexRouter.use("/auth", authRouter);

export default indexRouter;