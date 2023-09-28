import { Router } from "express";
import CommentsController from "../controllers/commentsController.js";

const {
  createOneComment,
  createManyComments,
  createAllComments,
  createAllCommentsByItinerary,
  createOneCommentById,
  createOneCommentByName,
  updateOneComment,
  deleteOneComment,
} = CommentsController;

const commentsRouter = Router();

commentsRouter.post("/", createOneComment);
commentsRouter.post("/many", createManyComments);

commentsRouter.get("/", createAllComments);
commentsRouter.get("/:itineraryId", createAllCommentsByItinerary);
commentsRouter.get("/id/:id", createOneCommentById);
commentsRouter.get("/name/:itinerary", createOneCommentByName);

commentsRouter.put("/", updateOneComment);

commentsRouter.delete("/", deleteOneComment);

export default commentsRouter;
