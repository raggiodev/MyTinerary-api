import {Router} from "express";
import CommentsController from "../controllers/commentsController.js";

const { createOneComment, createManyComments, readAllComments, readAllCommentsByItinerary, readOneCommentById, readOneCommentByName, updateOneComment, deleteOneComment } = CommentsController;

const commentsRouter = Router();

commentsRouter.post("/", createOneComment);
commentsRouter.post("/many", createManyComments);

commentsRouter.get("/", readAllComments);
commentsRouter.get("/:itineraryId", readAllCommentsByItinerary);
commentsRouter.get("/id/:id", readOneCommentById);
commentsRouter.get("/name/:itinerary", readOneCommentByName);

commentsRouter.put("/", updateOneComment);

commentsRouter.delete("/", deleteOneComment);

export default commentsRouter;