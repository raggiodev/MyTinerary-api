import {Router} from "express";
import citiesRouter from "./citiesRouter.js";
import itinerariesRouter from "./itinerariesRouter.js";
import authRouter from "./authRouter.js";

const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("Welcome to my API: MyTinerary API");
});

indexRouter.use("/cities", citiesRouter);
indexRouter.use("/itineraries", itinerariesRouter);
indexRouter.use("/users", authRouter);

export default indexRouter;