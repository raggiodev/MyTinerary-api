import {Router} from "express";
import ActivitiesController from "../controllers/activitiesController.js";

const {
  createOneActivity,
  createManyActivities,
  createAllActivities,
  createAllActivitiesByItinerary,
  createOneActivityById,
  createOneActivityByName,
  updateOneActivity,
  deleteOneActivity,
} = ActivitiesController;

const activitiesRouter = Router();

activitiesRouter.post("/", createOneActivity);
activitiesRouter.post("/many", createManyActivities);

activitiesRouter.get("/", createAllActivities);
activitiesRouter.get("/:itineraryId", createAllActivitiesByItinerary);
activitiesRouter.get("/id/:id", createOneActivityById);
activitiesRouter.get("/name/:itinerary", createOneActivityByName);

activitiesRouter.put("/", updateOneActivity);

activitiesRouter.delete("/", deleteOneActivity);

export default activitiesRouter;