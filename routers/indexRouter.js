import {Router} from "express";
import citiesRouter from "./citiesRouter.js";
import itinerariesRouter from "./itinerariesRouter.js";
import usersRouter from "./usersRouter.js";

const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("Welcome to my API: MyTinerary API");
});

indexRouter.use("/cities", citiesRouter);
indexRouter.use("/itineraries", itinerariesRouter);
indexRouter.use("/users", usersRouter);

export default indexRouter;